# Time Keeper

This is a Node.js script that uses the Puppeteer library to automate a web browser. It logs into a website using a username, password, and system ID provided in a configuration file, navigates to a "Leave Status" page, and extracts the value of a particular HTML input field.

The script first imports the necessary libraries and reads in the required variables from a configuration file. It then sets up an array of command line arguments to pass to the Puppeteer browser instance to reduce memory usage and improve performance.

The script launches a headless browser instance with the minimal arguments and sets the default navigation timeout to 0 to ensure that the script doesn't timeout during navigation. It then navigates to the provided URL and logs in using the provided credentials.

After logging in, the script navigates to the "Leave Status" page by clicking on a series of elements on the page. Once on the "Leave Status" page, it waits for a particular HTML input field to appear and extracts its value using page.evaluate().

Finally, the script logs the value of the HTML input field to the console and catches any errors that may occur during the script's execution.

## Getting Started

### Dependencies

* Node.js
* Puppeteer

### Installing

* How/where to download your program
* Any modifications needed to be made to files/folders

### Executing program

* How to run the program
* Step-by-step bullets
```
code blocks for commands
```

## Help

Any advise for common problems or issues.
```
command to run if program contains helper info
```

## Version History

* 0.2
    * Various bug fixes and optimizations
    * See [commit change]() or See [release history]()
* 0.1
    * Initial Release

## License

This project is licensed under the MIT License - see the LICENSE.md file for details

## Acknowledgments

<!-- Inspiration, code snippets, etc.
* [awesome-readme](https://github.com/matiassingers/awesome-readme)
* [PurpleBooth](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2)
* [dbader](https://github.com/dbader/readme-template)
* [zenorocha](https://gist.github.com/zenorocha/4526327)
* [fvcproductions](https://gist.github.com/fvcproductions/1bfc2d4aecb01a834b46) -->
