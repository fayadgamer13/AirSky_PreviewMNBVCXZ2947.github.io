const _0x2105a1 = _0x5926;
function _0x5926(_0x2592af, _0xdcf05c) {
  const _0x46a811 = _0x46a8();
  return (
    (_0x5926 = function (_0x5926a4, _0xf7500d) {
      _0x5926a4 = _0x5926a4 - 0x17e;
      let _0x3e1d55 = _0x46a811[_0x5926a4];
      return _0x3e1d55;
    }),
    _0x5926(_0x2592af, _0xdcf05c)
  );
}
(function (_0x5564fd, _0x548209) {
  const _0x4d3acc = _0x5926,
    _0x5a1d58 = _0x5564fd();
  while (!![]) {
    try {
      const _0x3e6208 =
        (parseInt(_0x4d3acc(0x19b)) / 0x1) *
          (-parseInt(_0x4d3acc(0x19c)) / 0x2) +
        -parseInt(_0x4d3acc(0x18d)) / 0x3 +
        (parseInt(_0x4d3acc(0x182)) / 0x4) *
          (parseInt(_0x4d3acc(0x18e)) / 0x5) +
        (parseInt(_0x4d3acc(0x19a)) / 0x6) *
          (parseInt(_0x4d3acc(0x1a1)) / 0x7) +
        (parseInt(_0x4d3acc(0x187)) / 0x8) *
          (parseInt(_0x4d3acc(0x183)) / 0x9) +
        (parseInt(_0x4d3acc(0x198)) / 0xa) *
          (parseInt(_0x4d3acc(0x196)) / 0xb) +
        (-parseInt(_0x4d3acc(0x194)) / 0xc) *
          (parseInt(_0x4d3acc(0x190)) / 0xd);
      if (_0x3e6208 === _0x548209) break;
      else _0x5a1d58["push"](_0x5a1d58["shift"]());
    } catch (_0x57ccce) {
      _0x5a1d58["push"](_0x5a1d58["shift"]());
    }
  }
})(_0x46a8, 0x43cac);
class Bottle extends Phaser["GameObjects"][_0x2105a1(0x18c)] {
  constructor(_0x44ff47, _0x36f90b, _0x51d0d2, _0x169aff) {
    const _0x32fce4 = _0x2105a1;
    super(_0x44ff47, _0x36f90b, _0x51d0d2, _0x169aff),
      (this[_0x32fce4(0x199)] = _0x44ff47),
      _0x44ff47[_0x32fce4(0x18f)]["existing"](this),
      this["setInteractive"](),
      (this[_0x32fce4(0x195)] = ![]),
      (this["hasFlippedInAir"] = ![]),
      (this[_0x32fce4(0x1a0)] = ![]);
  }
  [_0x2105a1(0x186)]() {
    const _0x4a8568 = _0x2105a1;
    this[_0x4a8568(0x199)][_0x4a8568(0x197)][_0x4a8568(0x18f)][
      _0x4a8568(0x17e)
    ](this),
      this[_0x4a8568(0x192)](0.4),
      this["setFrictionAir"](0.009),
      this[_0x4a8568(0x184)](0xa),
      this["setInteractive"]();
  }
  [_0x2105a1(0x180)](_0xe2241) {
    const _0x290002 = _0x2105a1;
    if (!this[_0x290002(0x195)]) return;
    this[_0x290002(0x195)] = ![];
    let _0x5dd275 =
      (this[_0x290002(0x199)][_0x290002(0x18a)] - _0xe2241) / 0x14;
    if (_0x5dd275 > 0x23) _0x5dd275 = 0x23;
    this[_0x290002(0x188)](0x0, -_0x5dd275),
      this[_0x290002(0x19e)](_0x5dd275 / 0x12c);
  }
  [_0x2105a1(0x19d)]() {
    const _0x51469e = _0x2105a1;
    return (
      Math[_0x51469e(0x189)](this[_0x51469e(0x191)]) < 0.65 &&
      Math["abs"](this[_0x51469e(0x17f)][_0x51469e(0x185)]) < 0x2 &&
      Math[_0x51469e(0x189)](this[_0x51469e(0x17f)][_0x51469e(0x181)]["y"]) <
        0x2
    );
  }
  [_0x2105a1(0x18b)](_0x1ccc0c) {
    const _0x596935 = _0x2105a1;
    this[_0x596935(0x193)](0.1),
      this[_0x596935(0x199)][_0x596935(0x1a2)][_0x596935(0x18f)]({
        targets: this,
        ease: _0x596935(0x19f),
        duration: 0x12c,
        scale: 0x1,
        onComplete: () => {
          const _0x16947 = _0x596935;
          (this[_0x16947(0x195)] = !![]), _0x1ccc0c();
        },
      });
  }
}
function _0x46a8() {
  const _0x4cf796 = [
    "angle",
    "setFriction",
    "setScale",
    "36NefFNE",
    "canFlip",
    "122947eFszho",
    "matter",
    "210XPiJnb",
    "scene",
    "51492RnOCLu",
    "297633ddJVPa",
    "2axVtbR",
    "isStanding",
    "setAngularVelocity",
    "Back.out",
    "isTouched",
    "343cvODCM",
    "tweens",
    "gameObject",
    "body",
    "flip",
    "velocity",
    "1267764YTtyuO",
    "10899hoTiBd",
    "setFrictionStatic",
    "angularVelocity",
    "addBody",
    "3440auEHXD",
    "setVelocity",
    "abs",
    "startDragY",
    "createTween",
    "Sprite",
    "854079ZopMYg",
    "5rYoqmh",
    "add",
    "2742584hSkcSN",
  ];
  _0x46a8 = function () {
    return _0x4cf796;
  };
  return _0x46a8();
}
