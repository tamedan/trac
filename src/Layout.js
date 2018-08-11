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
      <div>
        <h1>Layout</h1>
        {this.initLayout().map(row => {
          console.log(row);
          row.map(item => {
            return (
              <div className={"grass h-" + item.h + " w-" + item.w}>item</div>
            );
          });
        })}
      </div>
    );
  }
}

export default Layout;
