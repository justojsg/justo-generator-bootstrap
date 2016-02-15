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
  get help() {
    return {
      desc: "Create a Bootstrap file.",
      params: {
        lang: "The <html>'s lang attribute.",
        file: "The file.",
        title: "The <title>.",
        fontAwesome: "Use 'Font Awesome': 'false', nope; 'local', locally; or 'MaxCDN'.",
        template: "The file template to use: 'jumbotron', 'jumbotron-fluid'."
      }
    };
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
    this.input({name: "file", title: "File"});
    this.input({name: "title", title: "Title"});

    if (this.confirm({name: "fontAwesome", title: "Would you like to use 'Font Awesome'?"})) {
      this.list({name: "fontAwesome", title: "  How to link it?", choices: ["local", "CDN (MAXCDN)"]});
    }
  }

  /**
   * @override
   */
  generate(answers) {
    var tmp;

    //(1) template
    if (answers.template == "jumbotron") tmp = "app/jumbotron.html";
    else if (answers.template == "jumbotron-fluid") tmp = "app/jumbotron-fluid.html";
    else tmp = "app/starter.html";

    //(2) generate
    this.template(tmp, answers.file, {
      lang: answers.lang,
      title: answers.title,
      bootstrapCss: "styles/bootstrap.min.css",
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
  }
}
