const u = (id, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const media = {

  heroPortrait: "/Me.jpg",

  heroAbstract: u("1618005182384-a83a8bd57fbe"),
  aboutTexture: u("1550745165-9bc0b252726f"),
  workBackdrop: u("1526374965328-7f61d4dc18c5"),
  contactTexture: u("1635776062127-d379bfcba9f8"),
  grid: u("1451187580459-43490279c0fa", 2000),
};

export default media;
