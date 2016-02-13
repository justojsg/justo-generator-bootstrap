//import
import {Generator} from "justo-generator";

/**
 * Generator.
 */
export default class extends Generator {
  /**
   * Constructor.
   */
  constructor(opts, responses) {
    super(opts, responses);
  }

  /**
   * @override
   */
  init() {
    super.init();
  }

  /**
   * @override
   */
  fin() {
    super.fin();
  }

  /**
   * @override
   */
  prompt(answers) {
    this.input({name: "title", title: "Title"});

    if (this.confirm({name: "fontAwesome", title: "Would you like to use 'Font Awesome'?"})) {
      this.list({name: "fontAwesome", title: "  How to link it?", choices: ["local", "CDN (MAXCDN)"]});
    }
  }

  /**
   * @override
   */
  generate(answers) {
    this.mkdir("app/fonts");
    this.mkdir("app/images");
    this.mkdir("app/scripts");
    this.mkdir("app/styles");
    this.template("app/index.html", {
      title: answers.title,
      bootstrapCss: "styles/bootstrap.min.css",
      bootstrapThemeCss: "styles/bootstrap-theme.min.css",
      bootstrapJs: "scripts/bootstrap.min.js",
      jqueryJs: "https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js",
      fontAwesome: (
                     answers.fontAwesome == "local" ?
                     "fonts/font-awesome.min.css" :
                     (
                       answers.fontAwesome == "CDN (MAXCDN)" ?
                       "https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" :
                       false
                     )
                   )
    });
    this.mkdir("test/unit");
  }
}
