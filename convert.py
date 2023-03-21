#!/usr/bin/env python3

import bs4

FILE_INPUT = "source.html"
FILE_OUTPUT = "index.html"


def convert(content):
    soup = bs4.BeautifulSoup(content, "lxml")
    for span in soup.find_all("span", attrs={"class": "extract"}):
        replacement_elements = []
        assert len(list(span.children)) == 1
        for char in span.text:
            new_tag = soup.new_tag("span")
            new_tag.string = char
            new_tag["class"] = "randomizeme"
            replacement_elements.append(new_tag)
        assert len(replacement_elements) >= 1
        span.replace_with(*replacement_elements)
    return str(soup)


def run():
    with open(FILE_INPUT, "r") as fp:
        content = fp.read()
    converted = convert(content)
    with open(FILE_OUTPUT, "w") as fp:
        fp.write(converted)


if __name__ == "__main__":
    run()
