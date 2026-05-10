const Biomes = {
  Forest: "Forest",
  Underground: "Underground",
  Snow: "Snow",
  Desert: "Desert",
  Ocean: "Ocean",
  Jungle: "Jungle",
  Hallow: "Hallow",
  Mushroom: "Mushroom",
  Underworld: "Underworld",
};

const Npcs = {
  //Vanilla
  Guide: "Guide",
  Merchant: "Merchant",
  Nurse: "Nurse",
  Demolitionist: "Demolitionist",
  DyeTrader: "Dye Trader",
  Angler: "Angler",
  Zoologist: "Zoologist",
  Dryad: "Dryad",
  Painter: "Painter",
  Golfer: "Golfer",
  ArmsDealer: "Arms Dealer",
  Tavernkeep: "Tavernkeep",
  Stylist: "Stylist",
  GoblinTinkerer: "Goblin Tinkerer",
  WitchDoctor: "Witch Doctor",
  Clothier: "Clothier",
  Mechanic: "Mechanic",
  PartyGirl: "Party Girl",
  Wizard: "Wizard",
  TaxCollector: "Tax Collector",
  Truffle: "Truffle",
  Pirate: "Pirate",
  Steampunker: "Steampunker",
  SantaClaus: "Santa Claus",
  Cyborg: "Cyborg",
  Princess: "Princess",
  //One-Offs
  Automaton: "Automaton", //From Magic Storage
};

const NpcBuilder = function (npcName) {
  this.npc = {
    Name: npcName,
    Loved: {
      Biome: null,
      NPCs: [],
    },
    Liked: {
      Biome: null,
      NPCs: [],
    },
    Disliked: {
      Biome: null,
      NPCs: [],
    },
    Hated: {
      Biome: null,
      NPCs: [],
    },
  };

  this.lovesBiome = function (biome) {
    this.npc.Loved.Biome = biome;
    return this;
  };

  this.lovesNPCs = function (...things) {
    this.npc.Loved.NPCs = this.npc.Loved.NPCs.concat(Array.from(things));
    return this;
  };

  this.likesBiome = function (biome) {
    this.npc.Liked.Biome = biome;
    return this;
  };

  this.likesNPCs = function (...things) {
    this.npc.Liked.NPCs = this.npc.Liked.NPCs.concat(Array.from(things));
    return this;
  };

  this.dislikesBiome = function (biome) {
    this.npc.Disliked.Biome = biome;
    return this;
  };

  this.dislikesNPCs = function (...things) {
    this.npc.Disliked.NPCs = this.npc.Disliked.NPCs.concat(Array.from(things));
    return this;
  };

  this.hatesBiome = function (biome) {
    this.npc.Hated.Biome = biome;
    return this;
  };

  this.hatesNPCs = function (...things) {
    this.npc.Hated.NPCs = this.npc.Hated.NPCs.concat(Array.from(things));
    return this;
  };

  this.build = function () {
    return this.npc;
  };
};

const NpcModels = {
  Vanilla: [
    new NpcBuilder(Npcs.Guide)
      .likesBiome(Biomes.Forest)
      .likesNPCs(
        Npcs.Clothier,
        Npcs.Zoologist,
        Npcs.Princess
      )
      .dislikesBiome(Biomes.Ocean)
      .dislikesNPCs(Npcs.Steampunker)
      .hatesNPCs(Npcs.Painter)
      .build(),
    new NpcBuilder(Npcs.Merchant)
      .likesBiome(Biomes.Forest)
      .likesNPCs(
        Npcs.Golfer,
        Npcs.Nurse,
        Npcs.Princess
      )
      .dislikesBiome(Biomes.Desert)
      .dislikesNPCs(Npcs.TaxCollector)
      .hatesNPCs(Npcs.Angler)
      .build(),
    new NpcBuilder(Npcs.Nurse)
      .lovesNPCs(Npcs.ArmsDealer)
      .likesBiome(Biomes.Hallow)
      .likesNPCs(
        Npcs.Wizard,
        Npcs.Princess
      )
      .dislikesBiome(Biomes.Snow)
      .dislikesNPCs(
        Npcs.Dryad,
        Npcs.PartyGirl
      )
      .hatesNPCs(Npcs.Zoologist)
      .build(),
    new NpcBuilder(Npcs.Demolitionist)
      .lovesNPCs(Npcs.Tavernkeep)
      .likesBiome(Biomes.Underground)
      .likesNPCs(
        Npcs.Mechanic,
        Npcs.Princess
      )
      .dislikesBiome(Biomes.Ocean)
      .dislikesNPCs(
        Npcs.ArmsDealer,
        Npcs.GoblinTinkerer
      )
      .build(),
    new NpcBuilder(Npcs.DyeTrader)
      .likesBiome(Biomes.Desert)
      .likesNPCs(
        Npcs.ArmsDealer,
        Npcs.Painter,
        Npcs.Princess
      )
      .dislikesBiome(Biomes.Forest)
      .dislikesNPCs(Npcs.Steampunker)
      .hatesNPCs(Npcs.Pirate)
      .build(),
    new NpcBuilder(Npcs.Angler)
      .likesBiome(Biomes.Ocean)
      .likesNPCs(
        Npcs.Demolitionist,
        Npcs.PartyGirl,
        Npcs.TaxCollector,
        Npcs.Princess
      )
      .dislikesBiome(Biomes.Desert)
      .hatesNPCs(Npcs.Tavernkeep)
      .build(),
    new NpcBuilder(Npcs.Zoologist)
      .lovesNPCs(Npcs.WitchDoctor)
      .likesBiome(Biomes.Forest)
      .likesNPCs(
        Npcs.Golfer,
        Npcs.Princess
      )
      .dislikesBiome(Biomes.Desert)
      .dislikesNPCs(Npcs.Angler)
      .hatesNPCs(Npcs.ArmsDealer)
      .build(),
    new NpcBuilder(Npcs.Dryad)
      .likesBiome(Biomes.Jungle)
      .likesNPCs(
        Npcs.WitchDoctor,
        Npcs.Truffle,
        Npcs.Princess
      )
      .dislikesBiome(Biomes.Desert)
      .dislikesNPCs(Npcs.Angler)
      .hatesNPCs(
        Npcs.Golfer
      )
      .build(),
    new NpcBuilder(Npcs.Painter)
      .lovesNPCs(Npcs.Dryad)
      .likesBiome(Biomes.Jungle)
      .likesNPCs(
        Npcs.PartyGirl,
        Npcs.Princess
      )
      .dislikesBiome(Biomes.Forest)
      .dislikesNPCs(Npcs.Truffle, Npcs.Cyborg)
      .build(),
    new NpcBuilder(Npcs.Golfer)
      .lovesNPCs(Npcs.Angler)
      .likesBiome(Biomes.Forest)
      .likesNPCs(Npcs.Painter, Npcs.Zoologist, Npcs.Princess)
      .dislikesBiome(Biomes.Underground)
      .dislikesNPCs(Npcs.Pirate)
      .hatesNPCs(Npcs.Merchant)
      .build(),
    new NpcBuilder(Npcs.ArmsDealer)
      .lovesNPCs(Npcs.Nurse)
      .likesBiome(Biomes.Desert)
      .likesNPCs(
        Npcs.Steampunker,
        Npcs.Princess
      )
      .dislikesBiome(Biomes.Snow)
      .dislikesNPCs(Npcs.Golfer)
      .hatesNPCs(Npcs.Demolitionist)
      .build(),
    new NpcBuilder(Npcs.Tavernkeep)
      .lovesNPCs(Npcs.Demolitionist)
      .likesBiome(Biomes.Hallow)
      .likesNPCs(
        Npcs.GoblinTinkerer,
        Npcs.Princess
      )
      .dislikesBiome(Biomes.Snow)
      .dislikesNPCs(Npcs.Guide)
      .hatesNPCs(Npcs.DyeTrader)
      .build(),
    new NpcBuilder(Npcs.Stylist)
      .lovesNPCs(Npcs.DyeTrader)
      .likesBiome(Biomes.Ocean)
      .likesNPCs(Npcs.Pirate, Npcs.Princess)
      .dislikesBiome(Biomes.Snow)
      .dislikesNPCs(
        Npcs.Tavernkeep
      )
      .hatesNPCs(
        Npcs.GoblinTinkerer
      )
      .build(),
    new NpcBuilder(Npcs.GoblinTinkerer)
      .lovesNPCs(Npcs.Mechanic)
      .likesBiome(Biomes.Underground)
      .likesNPCs(Npcs.DyeTrader, Npcs.Princess)
      .dislikesBiome(Biomes.Jungle)
      .dislikesNPCs(Npcs.Clothier)
      .hatesNPCs(Npcs.Stylist)
      .build(),
    new NpcBuilder(Npcs.WitchDoctor)
      .likesBiome(Biomes.Jungle)
      .likesNPCs(
        Npcs.Dryad,
        Npcs.Guide,
        Npcs.Princess
      )
      .dislikesBiome(Biomes.Hallow)
      .dislikesNPCs(Npcs.Nurse)
      .hatesNPCs(Npcs.Truffle)
      .build(),
    new NpcBuilder(Npcs.Clothier)
      .lovesNPCs(Npcs.Truffle)
      .likesBiome(Biomes.Underground)
      .likesNPCs(
        Npcs.TaxCollector,
        Npcs.Princess
      )
      .dislikesBiome(Biomes.Hallow)
      .dislikesNPCs(Npcs.Nurse)
      .hatesNPCs(Npcs.Mechanic)
      .build(),
    new NpcBuilder(Npcs.Mechanic)
      .lovesNPCs(Npcs.GoblinTinkerer)
      .likesBiome(Biomes.Snow)
      .likesNPCs(Npcs.Cyborg, Npcs.Princess)
      .dislikesBiome(Biomes.Underground)
      .dislikesNPCs(
        Npcs.ArmsDealer
      )
      .hatesNPCs(Npcs.Clothier)
      .build(),
    new NpcBuilder(Npcs.PartyGirl)
      .lovesNPCs(Npcs.Wizard, Npcs.Zoologist)
      .likesBiome(Biomes.Hallow)
      .likesNPCs(
        Npcs.Stylist,
        Npcs.Princess
      )
      .dislikesBiome(Biomes.Underground)
      .dislikesNPCs(Npcs.Merchant)
      .hatesNPCs(Npcs.TaxCollector)
      .build(),
    new NpcBuilder(Npcs.Wizard)
      .lovesNPCs(Npcs.Golfer)
      .likesBiome(Biomes.Hallow)
      .likesNPCs(
        Npcs.Merchant,
        Npcs.Princess
      )
      .dislikesBiome(Biomes.Ocean)
      .dislikesNPCs(Npcs.WitchDoctor)
      .hatesNPCs(Npcs.Cyborg)
      .build(),
    new NpcBuilder(Npcs.TaxCollector)
      .lovesNPCs(Npcs.Merchant)
      .likesBiome(Biomes.Snow)
      .likesNPCs(Npcs.PartyGirl, Npcs.Princess)
      .dislikesBiome(Biomes.Hallow)
      .dislikesNPCs(
        Npcs.Demolitionist,
        Npcs.Mechanic
      )
      .hatesNPCs(Npcs.SantaClaus)
      .build(),
    new NpcBuilder(Npcs.Truffle)
      .lovesNPCs(Npcs.Guide)
      .likesBiome(Biomes.Mushroom)
      .likesNPCs(Npcs.Dryad, Npcs.Princess)
      .dislikesNPCs(Npcs.Clothier)
      .hatesNPCs(Npcs.WitchDoctor)
      .build(),
    new NpcBuilder(Npcs.Pirate)
      .lovesNPCs(Npcs.Angler)
      .likesBiome(Biomes.Ocean)
      .likesNPCs(Npcs.Tavernkeep, Npcs.Princess)
      .dislikesBiome(Biomes.Underground)
      .dislikesNPCs(Npcs.Stylist)
      .hatesNPCs(Npcs.Guide)
      .build(),
    new NpcBuilder(Npcs.Steampunker)
      .lovesNPCs(Npcs.Cyborg)
      .likesBiome(Biomes.Desert)
      .likesNPCs(
        Npcs.Painter,
        Npcs.Princess
      )
      .dislikesBiome(Biomes.Jungle)
      .dislikesNPCs(
        Npcs.Dryad,
        Npcs.Wizard,
        Npcs.PartyGirl
      )
      .build(),
    new NpcBuilder(Npcs.Cyborg)
      .likesBiome(Biomes.Snow)
      .likesNPCs(
        Npcs.Steampunker,
        Npcs.Pirate,
        Npcs.Stylist,
        Npcs.Princess
      )
      .dislikesBiome(Biomes.Jungle)
      .dislikesNPCs(
        Npcs.Zoologist
      )
      .hatesNPCs(Npcs.Wizard)
      .build(),
    new NpcBuilder(Npcs.SantaClaus)
      .lovesBiome(Biomes.Snow)
      .likesNPCs(Npcs.Princess)
      .hatesBiome(Biomes.Desert)
      .hatesNPCs(Npcs.TaxCollector)
      .build(),
    new NpcBuilder(Npcs.Princess)
      .lovesNPCs(...Object.values(Npcs).filter((npc) => npc !== "Princess"))
      .build(),
  ],
  "One-Offs": [
    new NpcBuilder(Npcs.Automaton)
      .lovesBiome(Biomes.Snow)
      .lovesNPCs(Npcs.Mechanic)
      .likesBiome(Biomes.Forest)
      .likesNPCs(Npcs.WitchDoctor, Npcs.Princess)
      .dislikesBiome(Biomes.Desert)
      .dislikesNPCs(Npcs.Wizard)
      .hatesBiome(Biomes.Hallow)
      .hatesNPCs(Npcs.TaxCollector)
      .build(),
  ],
};
