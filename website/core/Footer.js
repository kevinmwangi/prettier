"use strict";

const React = require("react");

const GithubButton = props =>
  <a
    className="github-button"
    href={props.config.githubUrl}
    data-icon="octicon-star"
    data-count-href={`/${props.config.repo}/stargazers`}
    data-count-api={`/repos/${props.config.repo}#stargazers_count`}
    data-count-aria-label="# stargazers on GitHub"
    aria-label="Star this project on GitHub"
  >
    Star
  </a>;

GithubButton.propTypes = {
  config: React.PropTypes.object
};

class Footer extends React.Component {
  render() {
    // const currentYear = new Date().getFullYear();
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            <img
              src={this.props.config.baseUrl + this.props.config.footerIcon}
              alt={this.props.config.title}
            />
          </a>
          <div>
            <h5>Docs</h5>
            <a
              href={
                this.props.config.baseUrl +
                "docs/" +
                this.props.language +
                "/why-prettier.html"
              }
            >
              Getting Started (or other categories)
            </a>
            <a
              href={
                this.props.config.baseUrl +
                "docs/" +
                this.props.language +
                "/why-prettier.html"
              }
            >
              Guides (or other categories)
            </a>
            <a
              href={
                this.props.config.baseUrl +
                "docs/" +
                this.props.language +
                "/why-prettier.html"
              }
            >
              API Reference (or other categories)
            </a>
          </div>
          <div>
            <h5>Community</h5>
            <a
              href={this.props.config.baseUrl + this.props.language + "/users/"}
            >
              User Showcase
            </a>
            <a
              href="http://stackoverflow.com/questions/tagged/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Stack Overflow
            </a>
            <a href="https://gitter.im/jlongster/prettier">Chat on Gitter</a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </div>
          <div>
            <h5>More</h5>
            {/*<a href={this.props.config.baseUrl + "blog"}>Blog</a>*/}
            <a href={this.props.config.githubUrl}>GitHub</a>
            <GithubButton config={this.props.config} />
          </div>
        </section>
      </footer>
    );
  }
}

Footer.propTypes = {
  language: React.PropTypes.string,
  config: React.PropTypes.object
};

module.exports = Footer;
