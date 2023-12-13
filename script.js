function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true ,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotive();


const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
     ./photo/male0001.png
     ./photo/male0002.png
     ./photo/male0003.png
     ./photo/male0004.png
     ./photo/male0005.png
     ./photo/male0006.png
     ./photo/male0007.png
     ./photo/male0008.png
     ./photo/male0009.png
     ./photo/male0010.png
     ./photo/male0011.png
     ./photo/male0012.png
     ./photo/male0013.png
     ./photo/male0014.png
     ./photo/male0015.png
     ./photo/male0016.png
     ./photo/male0017.png
     ./photo/male0018.png
     ./photo/male0019.png
     ./photo/male0020.png
     ./photo/male0021.png
     ./photo/male0022.png
     ./photo/male0023.png
     ./photo/male0024.png
     ./photo/male0025.png
     ./photo/male0026.png
     ./photo/male0027.png
     ./photo/male0028.png
     ./photo/male0029.png
     ./photo/male0030.png
     ./photo/male0031.png
     ./photo/male0032.png
     ./photo/male0033.png
     ./photo/male0034.png
     ./photo/male0035.png
     ./photo/male0036.png
     ./photo/male0037.png
     ./photo/male0038.png
     ./photo/male0039.png
     ./photo/male0040.png
     ./photo/male0041.png
     ./photo/male0042.png
     ./photo/male0043.png
     ./photo/male0044.png
     ./photo/male0045.png
     ./photo/male0046.png
     ./photo/male0047.png
     ./photo/male0048.png
     ./photo/male0049.png
     ./photo/male0050.png
     ./photo/male0051.png
     ./photo/male0052.png
     ./photo/male0053.png
     ./photo/male0054.png
     ./photo/male0055.png
     ./photo/male0056.png
     ./photo/male0057.png
     ./photo/male0058.png
     ./photo/male0059.png
     ./photo/male0060.png
     ./photo/male0061.png
     ./photo/male0062.png
     ./photo/male0063.png
     ./photo/male0064.png
     ./photo/male0065.png
     ./photo/male0066.png
     ./photo/male0067.png
     ./photo/male0068.png
     ./photo/male0069.png
     ./photo/male0070.png
     ./photo/male0071.png
     ./photo/male0072.png
     ./photo/male0073.png
     ./photo/male0074.png
     ./photo/male0075.png
     ./photo/male0076.png
     ./photo/male0077.png
     ./photo/male0078.png
     ./photo/male0079.png
     ./photo/male0080.png
     ./photo/male0081.png
     ./photo/male0082.png
     ./photo/male0083.png
     ./photo/male0084.png
     ./photo/male0085.png
     ./photo/male0086.png
     ./photo/male0087.png
     ./photo/male0088.png
     ./photo/male0089.png
     ./photo/male0090.png
     ./photo/male0091.png
     ./photo/male0092.png
     ./photo/male0093.png
     ./photo/male0094.png
     ./photo/male0095.png
     ./photo/male0096.png
     ./photo/male0097.png
     ./photo/male0098.png
     ./photo/male0099.png
     ./photo/male0100.png
     ./photo/male0101.png
     ./photo/male0102.png
     ./photo/male0103.png
     ./photo/male0104.png
     ./photo/male0105.png
     ./photo/male0106.png
     ./photo/male0107.png
     ./photo/male0108.png
     ./photo/male0109.png
     ./photo/male0110.png
     ./photo/male0111.png
     ./photo/male0112.png
     ./photo/male0113.png
     ./photo/male0114.png
     ./photo/male0115.png
     ./photo/male0116.png
     ./photo/male0117.png
     ./photo/male0118.png
     ./photo/male0119.png
     ./photo/male0120.png
     ./photo/male0121.png
     ./photo/male0122.png
     ./photo/male0123.png
     ./photo/male0124.png
     ./photo/male0125.png
     ./photo/male0126.png
     ./photo/male0127.png
     ./photo/male0128.png
     ./photo/male0129.png
     ./photo/male0130.png
     ./photo/male0131.png
     ./photo/male0132.png
     ./photo/male0133.png
     ./photo/male0134.png
     ./photo/male0135.png
     ./photo/male0136.png
     ./photo/male0137.png
     ./photo/male0138.png
     ./photo/male0139.png
     ./photo/male0140.png
     ./photo/male0141.png
     ./photo/male0142.png
     ./photo/male0143.png
     ./photo/male0144.png
     ./photo/male0145.png
     ./photo/male0146.png
     ./photo/male0147.png
     ./photo/male0148.png
     ./photo/male0149.png
     ./photo/male0150.png
     ./photo/male0151.png
     ./photo/male0152.png
     ./photo/male0153.png
     ./photo/male0154.png
     ./photo/male0155.png
     ./photo/male0156.png
     ./photo/male0157.png
     ./photo/male0158.png
     ./photo/male0159.png
     ./photo/male0160.png
     ./photo/male0161.png
     ./photo/male0162.png
     ./photo/male0163.png
     ./photo/male0164.png
     ./photo/male0165.png
     ./photo/male0166.png
     ./photo/male0167.png
     ./photo/male0168.png
     ./photo/male0169.png
     ./photo/male0170.png
     ./photo/male0171.png
     ./photo/male0172.png
     ./photo/male0173.png
     ./photo/male0174.png
     ./photo/male0175.png
     ./photo/male0176.png
     ./photo/male0177.png
     ./photo/male0178.png
     ./photo/male0179.png
     ./photo/male0180.png
     ./photo/male0181.png
     ./photo/male0182.png
     ./photo/male0183.png
     ./photo/male0184.png
     ./photo/male0185.png
     ./photo/male0186.png
     ./photo/male0187.png
     ./photo/male0188.png
     ./photo/male0189.png
     ./photo/male0190.png
     ./photo/male0191.png
     ./photo/male0192.png
     ./photo/male0193.png
     ./photo/male0194.png
     ./photo/male0195.png
     ./photo/male0196.png
     ./photo/male0197.png
     ./photo/male0198.png
     ./photo/male0199.png
     ./photo/male0200.png
     ./photo/male0201.png
     ./photo/male0202.png
     ./photo/male0203.png
     ./photo/male0204.png
     ./photo/male0205.png
     ./photo/male0206.png
     ./photo/male0207.png
     ./photo/male0208.png
     ./photo/male0209.png
     ./photo/male0210.png
     ./photo/male0211.png
     ./photo/male0212.png
     ./photo/male0213.png
     ./photo/male0214.png
     ./photo/male0215.png
     ./photo/male0216.png
     ./photo/male0217.png
     ./photo/male0218.png
     ./photo/male0219.png
     ./photo/male0220.png
     ./photo/male0221.png
     ./photo/male0222.png
     ./photo/male0223.png
     ./photo/male0224.png
     ./photo/male0225.png
     ./photo/male0226.png
     ./photo/male0227.png
     ./photo/male0228.png
     ./photo/male0229.png
     ./photo/male0230.png
     ./photo/male0231.png
     ./photo/male0232.png
     ./photo/male0233.png
     ./photo/male0234.png
     ./photo/male0235.png
     ./photo/male0236.png
     ./photo/male0237.png
     ./photo/male0238.png
     ./photo/male0239.png
     ./photo/male0240.png
     ./photo/male0241.png
     ./photo/male0242.png
     ./photo/male0243.png
     ./photo/male0244.png
     ./photo/male0245.png
     ./photo/male0246.png
     ./photo/male0247.png
     ./photo/male0248.png
     ./photo/male0249.png
     ./photo/male0250.png
     ./photo/male0251.png
     ./photo/male0252.png
     ./photo/male0253.png
     ./photo/male0254.png
     ./photo/male0255.png
     ./photo/male0256.png
     ./photo/male0257.png
     ./photo/male0258.png
     ./photo/male0259.png
     ./photo/male0260.png
     ./photo/male0261.png
     ./photo/male0262.png
     ./photo/male0263.png
     ./photo/male0264.png
     ./photo/male0265.png
     ./photo/male0266.png
     ./photo/male0267.png
     ./photo/male0268.png
     ./photo/male0269.png
     ./photo/male0270.png
     ./photo/male0271.png
     ./photo/male0272.png
     ./photo/male0273.png
     ./photo/male0274.png
     ./photo/male0275.png
     ./photo/male0276.png
     ./photo/male0277.png
     ./photo/male0278.png
     ./photo/male0279.png
     ./photo/male0280.png
     ./photo/male0281.png
     ./photo/male0282.png
     ./photo/male0283.png
     ./photo/male0284.png
     ./photo/male0285.png
     ./photo/male0286.png
     ./photo/male0287.png
     ./photo/male0288.png
     ./photo/male0289.png
     ./photo/male0290.png
     ./photo/male0291.png
     ./photo/male0292.png
     ./photo/male0293.png
     ./photo/male0294.png
     ./photo/male0295.png
     ./photo/male0296.png
     ./photo/male0297.png
     ./photo/male0298.png
     ./photo/male0299.png
     ./photo/male0300.png
 `;
  return data.split("\n")[index];
}

const frameCount = 300;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page>canvas`,
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({
  trigger: "#page>canvas",
  pin: true,
  // markers:true,
  scroller: `#main`,
  start: `top top`,
  end: `600% top`,
});



gsap.to("#page1",{
  scrollTrigger:{
    trigger:`#page1`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})
gsap.to("#page2",{
  scrollTrigger:{
    trigger:`#page2`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})
gsap.to("#page3",{
  scrollTrigger:{
    trigger:`#page3`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})