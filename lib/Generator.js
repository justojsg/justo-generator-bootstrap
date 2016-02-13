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
      title: "The title",
      bootstrapCss: "styles/bootstrap.min.css",
      bootstrapThemeCss: "styles/bootstrap-theme.min.css",
      bootstrapJs: "scripts/bootstrap.min.js",
      jqueryJs: "https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"
    });
    this.mkdir("test/unit");
  }
}
