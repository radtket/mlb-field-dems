// const LeftField = 334;
// const MidLeftField = 351;
// const LeftCenterField = 367;
// const MidLeftCenterField = 402;
// const CenterField = 396;
// const MidRightCenterField = 403;
// const RightCenterField = 378;
// const MidRightField = 351;
// const RightField = 322;

const HOME_PLATE_X = 288.9642;
const HOME_PLATE_Y = 589.1899;

// 248.0316
const LeftField = {
  x: 40.9326,
  y: 341.8298,
};

const MidLeftField = {
  x: 48.0959,
  y: 318.7727,
};

const LeftCenterField = {
  x: 113.8617,
  y: 257.0725,
};

const MidLeftCenterField = {
  x: 171.2163,
  y: 203.2634,
};

const CenterField = {
  x: 226.7324,
  y: 203.2634,
};

const MidRightCenterField = {
  x: 237.2536,
  y: 193.1899,
};

const RightCenterField = {
  x: 426.1875,
  y: 193.1899,
};

const MidRightField = {
  x: 525.8031,
  y: 293.4771,
};

// 236.8389
const RightField = {
  x: 525.8031,
  y: 359.9621,
};

function draw() {
  const canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");

    // Cubic curves example
    ctx.beginPath();

    ctx.moveTo(HOME_PLATE_X, HOME_PLATE_Y);

    // RF
    ctx.lineTo(RightField.x, RightField.y);
    ctx.lineTo(MidRightField.x, MidRightField.y);
    ctx.lineTo(RightCenterField.x, RightCenterField.y);
    ctx.lineTo(MidRightCenterField.x, MidRightCenterField.y);
    ctx.lineTo(CenterField.x, CenterField.y);
    ctx.lineTo(MidLeftCenterField.x, MidLeftCenterField.y);
    ctx.lineTo(LeftCenterField.x, LeftCenterField.y);
    ctx.lineTo(MidLeftField.x, MidLeftField.y);
    ctx.lineTo(LeftField.x, LeftField.y);
    // ctx.lineTo(MidRightCenterField.x, MidRightCenterField.y);
    // ctx.lineTo(MidRightCenterField.x, MidRightCenterField.y);

    ctx.closePath();
    ctx.stroke();
  }
}

draw();
