import React, {Component} from 'react';
import {TabPane, createTabPaneData, MediaViewer, createMediaViewerData, selectMedia, unselectCurrentMedia} from './dkg-react-ui';
import './ProjectDetails.scss';


class ProjectDetails extends Component {
  constructor(props) {
    super(props);
    let project = props.project;
    let projectDetailSections = [
      {"name": "screenShots", "displayName": "Screen Shots"},
      {"name": "videos", "displayName": "Videos"},
      {"name": "implementation", "displayName": "Implementation"},
      {"name": "challenges", "displayName": "Challenges"}
    ];
    let usedSections = projectDetailSections.filter((section) => {
      return Array.isArray(project[section.name]) && project[section.name].length > 0;
    });

    this.state = {
      tabPaneInfo: createTabPaneData(
        usedSections.map((section) => section.displayName)
      ),
      projectSections: usedSections,
      imageViewerInfo: createMediaViewerData(project.screenShots),
      videoViewerInfo: createMediaViewerData(project.videos)
    };

    this.updateSelectedTab = this.updateSelectedTab.bind(this);
    this.updateSelectedScreenShot = this.updateSelectedScreenShot.bind(this);
    this.hideMagnifiedScreenShot = this.hideMagnifiedScreenShot.bind(this);
    this.updateSelectedVideo = this.updateSelectedVideo.bind(this);
    this.hideMagnifiedVideo = this.hideMagnifiedVideo.bind(this);
  }

  updateSelectedTab(val) {
    this.setState({
      tabPaneInfo: Object.assign(this.state.tabPaneInfo, {selectedTab: val})
    });
  }

  updateSelectedScreenShot(val) {
    this.updateSelectedMedia("imageViewerInfo", val);
  }

  hideMagnifiedScreenShot(val) {
    this.hideMagnifiedMedia("imageViewerInfo", val);
  }

  updateSelectedVideo(val) {
    this.updateSelectedMedia("videoViewerInfo", val);
  }

  hideMagnifiedVideo(val) {
    this.hideMagnifiedMedia("videoViewerInfo", val);
  }

  updateSelectedMedia(mediaInfoProperty, val) {
    this.setState((prevState, props) => {
      return Object.assign(prevState, {
        [mediaInfoProperty]: selectMedia(prevState[mediaInfoProperty], val)
      });
    });
  }

  hideMagnifiedMedia(mediaInfoProperty) {
    this.setState((prevState, props) => {
      return Object.assign(prevState, {
        [mediaInfoProperty]: unselectCurrentMedia(prevState[mediaInfoProperty])
      });
    });
  }

  render() {
    let project = this.props.project;

    return (
      <div className="project-details">
        <header>{project.displayName}</header>
        <section>
          <div className="summary">{project.summary}</div>

          <div className="source">
            Source:&nbsp;&nbsp;
              {project.sourceIsPrivate === true
                ? "private" 
                : <a href={`http://www.github.com/dennis-grant/${project.id}`} target="_blank">
                    www.github.com/dennis-grant/{project.id}
                  </a>
              }
          </div>

          {(Array.isArray(project.features) && project.features.length > 0) &&
            <div className="features">
              <header>Features</header>
              <ul>
                {project.features.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          }

          <TabPane className="description" tabPaneData={this.state.tabPaneInfo} onTabSelected={this.updateSelectedTab}>
            {this.state.projectSections.map((section, index) => {
              if (section.name === "screenShots")
                return (
                  <MediaViewer 
                    key={index} 
                    mediaFolder={`/media-list/${project.id}`} 
                    mediaViewerData={this.state.imageViewerInfo} 
                    onMediaSelected={this.updateSelectedScreenShot}
                    onMagnifiedMediaHidden={this.hideMagnifiedScreenShot} />
                );
              else if (section.name === "videos")
                return (
                  <MediaViewer 
                    key={index} 
                    mediaFolder={`/media-list/${project.id}`} 
                    mediaViewerData={this.state.videoViewerInfo} 
                    onMediaSelected={this.updateSelectedVideo}
                    onMagnifiedMediaHidden={this.hideMagnifiedVideo} />
                );
              else
                return (
                  <ul key={index}>
                    {project[section.name].map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                );
            })}
          </TabPane>
        </section>
      </div>
    );
  }
}


export default ProjectDetails;
