Following is the Readme.md file from the original repository.  This repository maintains only the published output and does not contain the original sources (generation scripts, markdowns, and others).

---

# README

Master repository for the Web site of PacificVis 2018.

**Please do not modify files on the web server directly.**

# Development of Web contents

1. Everything is stored at [the BitBucket repository](https://bitbucket.org/kwakita/pvis2018).

Directory organization is as follows:

- `assets`: assets of Web contents that include images, script files, and style sheets.

- `plain` directory contains generated plain text files.

- `work`: used for development work.

- The top directory: contains all the HTML files.

# Working on the contents

- Edit and save a content file (`*.md`) stored under the `/work/md` directory.  All the files are in Markdown format.  There are a few files under the same directory who have `.files` as their suffix.  They instruct M4 to combine content files and create Markdown files.  For example, `md/index.files` is used to generate `md/index.md`, which in turn is used to generate `../index.html` and `../plain/index.txt`.

- (Required) Start a local web serve by `work/bin/serve`.  This is a simple command that starts a PHP-based web server that listens at the 8080 port.  You can view the project directory by `http://localhost:8080/pvis2018/`.  For example, `http://localhost:8080/pvis2018/cfp.html`.

    Because this local web server is also used to generate HTML files, you **must run it** at first.

    To kill the local web server, issue `killall php` command.

- Creating HTML and plain text files: Just `make` at the `work` directory.

    Test your HTML output by visiting the local web server.

- If you are satisfied, `git add` your modification(s) and `git commit`.  For your convenience, `make add` is prepared.  If your work is modification of existing files, `make add; git commit` should be fine.

# Updating Web contents

1. Simply issue `make publish`.  It pushes the last commits to BitBucket, remote-logs in to the webser, and retrieves the updated contents from BitBucket by `git pull`.  For security reason, it is advised to hide the contents of the `work` directory at the server side: please do `chmod go-rw work` when you prepare the web site.  (Once is enough.  You do not have to do this every time you `make publish`)

# Software used in the work flow

1. PHP is used to test the generated web contents locally on my macOS before publishing.  See the tiny script `work/bin/serve`.  `php` is included in Xcode for macOS.

1. M4 is a general purpose text macro processor.  M4 is used to assemble pieces of Markdown files into a single Markdown file.  M4 is included in Xcode for macOS.

1. Pandoc is a powerful `Markdown` processor that can convert to/from HTML / Markdown / Plain text / MS Word, ...  We prepare all the Web contents in Markdown and convert into HTML and plain text formats.

    Please consult [`pandoc`'s documentation](https://pandoc.org/MANUAL.html#pandocs-markdown) for its support of Markdown.

    `brew install pandoc` on a macOS.

1. PhantomJS is a headless web browser made scriptable with JavaScript.  I use it to decorate `pandoc`-generated HTML files to make them fit `Bootstrap` framework.  I also use it to generatel `PDF` formats of part of the Web contents such as CFP and Program.

    `brew install phantomjs` on a macOS.

1. GNU `make` and GNU `m4` (a simple text macro processor).

# Contact

Contact Ken Wakita (wakita@is.titech.ac.jp) for technical support.
