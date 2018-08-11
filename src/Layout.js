import React from "react";

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      planeOptions: {
        width: 6,
        height: 6
      },
      plane: {}
    };
  }

  initLayout() {
    let planeOptions = this.state.planeOptions;
    let layout = [];
    for (let h = 0; h < planeOptions.width; h++) {
      layout[h] = [];
      for (let w = 0; w < planeOptions.height; w++) {
        layout[h].push({ h: h, w: w });
      }
    }
    console.log("layout: ", layout);
    return layout;
  }

  render() {
    return (
      <div className={"layout"}>
        <div className={"tractor"} />
        {this.initLayout().map(row => {
          console.log(row);
          return row.map(item => {
            return <div className={"grass h-" + item.h + " w-" + item.w} />;
          });
        })}
      </div>
    );
  }
}

export default Layout;
