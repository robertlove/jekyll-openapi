# Jekyll/OpenAPI

![OAS](https://img.shields.io/badge/OAS-3.0.3-brightgreen.svg)

**Note:** This project is **not finished** and is under active development. Contributions welcome!

Jekyll/OpenAPI is an OpenAPI 3 documentation website generator built with Jekyll for use on GitHub Pages.

[Jekyll](https://jekyllrb.com/) is a static website generator that works seamlessly with [GitHub Pages](https://pages.github.com/), whilst the [OpenAPI Specification](https://github.com/OAI/OpenAPI-Specification) (OAS) defines a standard, programming language-agnostic interface description for REST APIs. Put this all together and you get a fast, secure and highly customisable static website with free hosting for your API documentation.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Credits](#credits)
- [License](#license)

## Installation

Before you begin, ensure you've installed [Jekyll](https://jekyllrb.com/). Then:

1. `$ git clone https://github.com/robertlove/jekyll-openapi.git`
1. `$ cd jekyll-openapi`
1. `$ bundle install`
1. `$ bundle exec jekyll serve`

If all went well, you'll be able to view your new Jekyll/OpenAPI website locally by going to http://127.0.0.1:4000/jekyll-openapi/ in your browser.

## Usage

Update `_data/openapi.json` with your own API description, refresh your browser, and voilà!

**Note:** This project is built with [Jekyll/Bootstrap](https://github.com/robertlove/jekyll-bootstrap). See [Jekyll/Bootstrap Usage](https://github.com/robertlove/jekyll-bootstrap#usage) for more usage information - including instructions on how to change the look and feel of your API documentation.

## Contributing

See [Contributing](https://github.com/robertlove/.github/blob/master/CONTRIBUTING.md).

## Credits

See [Contributors](https://github.com/robertlove/jekyll-openapi/graphs/contributors).

## License

See [LICENSE](LICENSE).
