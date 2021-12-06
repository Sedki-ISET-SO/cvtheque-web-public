import React from "react";
import { Viewer, SpecialZoomLevel } from "@react-pdf-viewer/core";
import { ProgressBar } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { fullScreenPlugin } from "@react-pdf-viewer/full-screen";
import "@react-pdf-viewer/full-screen/lib/styles/index.css";
import { getFilePlugin } from '@react-pdf-viewer/get-file'
import { printPlugin } from '@react-pdf-viewer/print'
import '@react-pdf-viewer/print/lib/styles/index.css'

const SingleFile = ({ item, props }) => {
  const fullScreenPluginInstance = fullScreenPlugin({
    onEnterFullScreen: (zoom) => {
      zoom(SpecialZoomLevel.PageFit);
    },
    onExitFullScreen: (zoom) => {
      zoom(SpecialZoomLevel.PageFit);
    },
  });
  const { EnterFullScreenButton } = fullScreenPluginInstance;

  const getFilePluginInstance = getFilePlugin({ fileNameGenerator: () => { return 'CV' } })
  const { DownloadButton } = getFilePluginInstance
  
  const printPluginInstance = printPlugin()
  const { PrintButton } = printPluginInstance

  const plugins = [fullScreenPluginInstance, getFilePluginInstance, printPluginInstance];

  return (
    <div
      style={{
        height: "450px",
        width: "450px",
      }}
    >
      <div className="pdf-viewer__container-inner" style={{display: "flex"}}>
        {<EnterFullScreenButton />}
        <DownloadButton />
        <PrintButton />
      </div>
      <div
        style={{
          border: "1px solid rgba(0, 0, 0, 0.3)",
          height: "350px",
          width: "350px",
          marginBottom: "35px",
        }}
      >
        <Viewer
          fileUrl={item}
          renderLoader={(percentages) => (
            <div style={{ width: "240px", }}>
              <ProgressBar progress={Math.round(percentages)} />
            </div>
          )}
          plugins={plugins}
        />
      </div>
    </div>
  );
};

export default SingleFile;
