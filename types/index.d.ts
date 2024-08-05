export interface SaveData {
  '?xml': string;
  SaveGame: SaveGame;
}

export interface SaveGame {
  player: Player;
  farmhands: string | Farmhands;
  locations: Locations;
  currentSeason: Season;
  samBandName: string;
  elliottBookName: string;
  broadcastedMail: { string: string[] };
  worldStateIDs: { string: string[] };
  lostBooksFound: number;
  goldenWalnuts: number;
  goldenWalnutsFound: number;
  miniShippingBinsObtained: number;
  mineShrineActivated: boolean;
  skullShrineActivated: boolean;
  goldenCoconutCracked: boolean;
  parrotPlatformsUnlocked: boolean;
  farmPerfect: boolean;
  foundBuriedNuts: { string: string[] };
  checkedGarbage: string;
  visitsUntilY1Guarantee: number;
  shuffleMineChests: string;
  dayOfMonth: number;
  year: number;
  countdownToWedding: string | number;
  dailyLuck: number;
  uniqueIDForThisGame: number;
  weddingToday: boolean;
  isRaining: boolean;
  isDebrisWeather: boolean;
  isLightning: boolean;
  isSnowing: boolean;
  shouldSpawnMonsters: boolean;
  hasApplied1_3_UpdateChanges: boolean;
  hasApplied1_4_UpdateChanges: boolean;
  musicVolume: number;
  soundVolume: number;
  dishOfTheDay: DishOfTheDay;
  highestPlayerLimit: number;
  moveBuildingPermissionMode: number;
  useLegacyRandom: boolean;
  locationWeather: LocationWeather;
  builders: string;
  bannedUsers: string;
  bundleData: {
    item: {
      key: { string: string };
      value: { string: string };
    }[];
  };
  limitedNutDrops: LimitedNutDrops;
  latestID: string;
  options: Options;
  splitscreenOptions: string;
  CustomData: string;
  mine_permanentMineChanges: MinePermanentMineChanges;
  mine_lowestLevelReached: number;
  weatherForTomorrow: string;
  whichFarm: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 'MeadowlandsFarm';
  mine_lowestLevelReachedForOrder: number;
  skullCavesDifficulty: number;
  minesDifficulty: number;
  currentGemBirdIndex: number;
  junimoKartLeaderboards: JunimoKartLeaderboards;
  specialOrders: SpecialOrders;
  availableSpecialOrders: AvailableSpecialOrders;
  completedSpecialOrders: { string: string[] };
  acceptedSpecialOrderTypes: { string: string[] };
  returnedDonations: string;
  globalInventories: string;
  collectedNutTracker: { string: string[] };
  farmerFriendships: string;
  cellarAssignments: {
    item: {
      key: { int: number };
      value: { long: string };
    };
  };
  timesFedRaccoons: number;
  treasureTotemsUsed: number;
  perfectionWaivers: number;
  seasonOfCurrentRaccoonBundle: number;
  raccoonBundles: { boolean: boolean[] };
  activatedGoldenParrot: boolean;
  daysPlayedWhenLastRaccoonBundleWasFinished: number;
  lastAppliedSaveFix: number;
  gameVersion: string;
  gameVersionLabel?: string;
}

export interface AvailableSpecialOrders {
  SpecialOrder: SpecialOrderElement[];
}

export interface SpecialOrderElement {
  preSelectedItems:
    | {
        item: {
          key: { string: string };
          value: { string: string };
        };
      }
    | string;
  selectedRandomElements:
    | {
        item: {
          key: { string: string };
          value: { int: number };
        };
      }
    | string;
  objectives: Objective[] | ObjectivesClass;
  generationSeed: number;
  seenParticipantsIDs: string;
  participantsIDs: string;
  unclaimedRewardsIDs: string;
  appliedSpecialRules: boolean;
  rewards: Reward[] | { amount: { int: number } };
  questKey: string;
  questName: string;
  questDescription: string;
  requester: string;
  orderType: string;
  specialRule: string;
  readyForRemoval: boolean;
  dueDate: number;
  duration: string;
  questState: string;
}

export interface Objective {
  currentCount: number;
  maxCount: number;
  description: string;
  failOnCompletion: boolean;
  acceptableContextTagSets: string;
}

export interface ObjectivesClass {
  currentCount: number;
  maxCount: number;
  description: string;
  failOnCompletion: boolean;
  targetNames?: string;
  acceptableContextTagSets?: string;
  skullCave?: { boolean: boolean };
}

export interface Reward {
  amount?: { int: number };
  multiplier?: { float: number };
  noLetter?: { boolean: boolean };
  grantedMails?: { string: string };
  host?: { boolean: boolean };
}

export enum Season {
  Fall = 'fall',
  Spring = 'spring',
  Summer = 'summer',
  Winter = 'winter',
}

export interface DishOfTheDay {
  isLostItem: boolean;
  category: number;
  hasBeenInInventory: boolean;
  name: string;
  parentSheetIndex: number;
  itemId: number;
  specialItem: boolean;
  isRecipe: boolean;
  quality: number;
  stack: number;
  SpecialVariable: number;
  tileLocation: ScaleElement;
  owner: number;
  type: TypeEnum;
  canBeSetDown: boolean;
  canBeGrabbed: boolean;
  isSpawnedObject: boolean;
  questItem: boolean;
  isOn: boolean;
  fragility: number;
  price: number;
  edibility: number;
  bigCraftable: boolean;
  setOutdoors: boolean;
  setIndoors: boolean;
  readyForHarvest: boolean;
  showNextIndex: boolean;
  flipped: boolean;
  isLamp: boolean;
  minutesUntilReady: number;
  boundingBox: BoundingBox;
  scale: ScaleElement;
  uses: number;
  destroyOvernight: boolean;
  questId?: number;
  preserve?: Preserve;
  preservedParentSheetIndex?: number;
  color?: Color;
  colorSameIndexAsParentSheetIndex?: boolean;
  ColorSameIndexAsParentSheetIndex?: boolean;
}

export interface BoundingBox {
  X: number;
  Y: number;
  Width: number;
  Height: number;
  Location: ScaleElement;
  Size: ScaleElement;
}

export interface ScaleElement {
  X: number;
  Y: number;
}

export interface Color {
  B: number;
  G: number;
  R: number;
  A: number;
  PackedValue: number;
}

export enum Preserve {
  Honey = 'Honey',
  Jelly = 'Jelly',
  Juice = 'Juice',
  Pickle = 'Pickle',
  Roe = 'Roe',
  Wine = 'Wine',
}

export enum TypeEnum {
  Arch = 'Arch',
  Asdf = 'asdf',
  Basic = 'Basic',
  Cooking = 'Cooking',
  Crafting = 'Crafting',
  Fish = 'Fish',
  Interactive = 'interactive',
  Litter = 'Litter',
  Minerals = 'Minerals',
  Seeds = 'Seeds',
}

export interface JunimoKartLeaderboards {
  entries: {
    NetLeaderboardsEntry: {
      name: { string: string };
      score: { int: number };
    }[];
  };
  maxEntries: { int: number };
}

export interface LimitedNutDrops {
  item: {
    key: { string: string };
    value: { int: number };
  }[];
}

export interface LocationWeather {
  item: LocationWeatherItem[];
}

export interface LocationWeatherItem {
  key: { string: string };
  value: PurpleValue;
}

export interface PurpleValue {
  LocationWeather: LocationWeatherClass;
}

export interface LocationWeatherClass {
  weatherForTomorrow: { string: string };
  weather: { string: string };
  isRaining: { boolean: boolean };
  isSnowing: { boolean: boolean };
  isLightning: { boolean: boolean };
  isDebrisWeather: { boolean: boolean };
  isGreenRain: { boolean: boolean };
  monthlyNonRainyDayCount: { int: number };
  WeatherForTomorrow: string;
  Weather: string;
  IsRaining: boolean;
  IsSnowing: boolean;
  IsLightning: boolean;
  IsDebrisWeather: boolean;
  IsGreenRain: boolean;
}

export interface Locations {
  GameLocation: GameLocation[];
}

export interface GameLocation {
  buildings: BuildingsClass | string;
  animals: string;
  piecesOfHay: number;
  characters: FluffyCharacters | string;
  objects: ObjectsObjects | string;
  resourceClumps: ResourceClumpsClass | string;
  largeTerrainFeatures: LargeTerrainFeaturesClass | string;
  terrainFeatures: TerrainFeaturesClass | string;
  name: string;
  waterColor: Color;
  isFarm: boolean;
  isOutdoors: boolean;
  isStructure: boolean;
  ignoreDebrisWeather: boolean;
  ignoreOutdoorLighting: boolean;
  ignoreLights: boolean;
  treatAsOutdoors: boolean;
  numberOfSpawnedObjectsOnMap: number;
  miniJukeboxCount: number;
  miniJukeboxTrack: MiniJukeboxTrack;
  furniture: FurnitureClass | string;
  Animals: {
    SerializableDictionaryOfInt64FarmAnimal: string;
  };
  IsGreenhouse: boolean;
  housePaintColor?: { BuildingPaintColor: string };
  grandpaScore?: number;
  farmCaveReady?: boolean;
  hasSeenGrandpaNote?: boolean;
  greenhouseUnlocked?: boolean;
  greenhouseMoved?: boolean;
  spousePatioSpot?: ScaleElement;
  wallPaper?: string;
  appliedWallpaper?: AppliedWallpaper;
  floor?: string;
  appliedFloor?: GameLocationAppliedFloor;
  fridge?: Fridge;
  fridgePosition?: ScaleElement;
  cribStyle?: number;
  daysUntilCommunityUpgrade?: number;
  itemsFromPlayerToSell?: string;
  itemsToStartSellingTomorrow?: string;
  bridgeFixed?: boolean;
  stumpFixed?: boolean;
  hasSpawnedBugsToday?: boolean;
  drivingOff?: boolean;
  drivingBack?: boolean;
  leaving?: boolean;
  museumPieces?: MuseumPieces;
  Gil?: Gil;
  talkedToGil?: boolean;
  hasUnlockedStatue?: boolean;
  witchStatueGone?: boolean;
  areasComplete?: { boolean: boolean[] };
  numberOfStarsOnPlaque?: number;
  bundles?: Bundles;
  bundleRewards?: ChestConsumedLevels;
  submerged?: boolean;
  ascending?: boolean;
  dayFirstEntered?: number;
  gateRect?: BoundingBox;
  _plankPosition?: number;
  _plankDirection?: number;
  animationState?: string;
  TicketPrice?: number;
  shouldToggleResort?: boolean;
  resortOpenToday?: boolean;
  resortRestored?: boolean;
  westernTurtleMoved?: boolean;
  mermaidPuzzleFinished?: boolean;
  fishedWalnut?: boolean;
  drinksClaimed?: string;
  bananaShrineComplete?: { boolean: boolean };
  bananaShrineNutAwarded?: { boolean: boolean };
  sandDuggy?: { whacked: boolean };
  farmhouseRestored?: boolean;
  farmhouseMailbox?: boolean;
  farmObelisk?: boolean;
  shippingBinPosition?: ScaleElement;
  traderActivated?: boolean;
  caveOpened?: boolean;
  treeNutShot?: boolean;
  treeNutObtained?: { boolean: boolean };
  firstParrotDone?: boolean;
  completed?: boolean;
  piecesDonated?: boolean[];
  centerSkeletonRestored?: boolean;
  snakeRestored?: boolean;
  batRestored?: boolean;
  frogRestored?: boolean;
  plantsRestoredLeft?: boolean;
  plantsRestoredRight?: boolean;
  hasFailedSurveyToday?: { boolean: boolean };
  visited?: boolean | { boolean: boolean };
  puzzleFinished?: boolean;
  gourmandRequestsFulfilled?: number;
  raceTrack?: RaceTrack;
}

export interface Gil {
  name: string;
  forceOneTileWide: boolean;
  isEmoting: boolean;
  isCharging: boolean;
  isGlowing: boolean;
  coloredBorder: boolean;
  flip: boolean;
  drawOnTop: boolean;
  faceTowardFarmer: boolean;
  ignoreMovementAnimation: boolean;
  faceAwayFromFarmer: boolean;
  scale: { float: number };
  glowingTransparency: number;
  glowRate: number;
  Gender: Gender;
  willDestroyObjectsUnderfoot: boolean;
  Position: ScaleElement;
  Speed: number;
  FacingDirection: number;
  IsEmoting: boolean;
  CurrentEmote: number;
  Scale: number;
  lastCrossroad: BoundingBox;
  daysAfterLastBirth: number;
  birthday_Day: number;
  age: number;
  manners: number;
  socialAnxiety: number;
  optimism: number;
  gender: Gender;
  sleptInBed: boolean;
  isInvisible: boolean;
  lastSeenMovieWeek: number;
  datingFarmer: string;
  divorcedFromFarmer: string;
  datable: boolean;
  defaultMap: string;
  id: number;
  daysUntilNotInvisible: number;
  followSchedule: boolean;
  moveTowardPlayerThreshold: number;
  hasBeenKissedToday: { boolean: boolean };
  shouldPlayRobinHammerAnimation: { boolean: boolean };
  shouldPlaySpousePatioAnimation: { boolean: boolean };
  shouldWearIslandAttire: { boolean: boolean };
  isMovingOnPathFindPath: { boolean: boolean };
  endOfRouteBehaviorName: { string: string };
  previousEndPoint: ScaleElement;
  squareMovementFacingPreference: number;
  DefaultFacingDirection: number;
  DefaultPosition: ScaleElement;
  IsWalkingInSquare: boolean;
  IsWalkingTowardPlayer: boolean;
}

export enum Gender {
  Female = 'Female',
  Male = 'Male',
  Undefined = 'Undefined',
}

export interface GameLocationAppliedFloor {
  SerializableDictionaryOfStringString: {
    item: {
      key: { string: string };
      value: { string: number };
    }[];
  };
}

export interface AppliedWallpaper {
  SerializableDictionaryOfStringString: {
    item: {
      key: { string: string };
      value: { string: number | string };
    }[];
  };
}

export interface BuildingsClass {
  Building: Building[];
}

export interface Building {
  id: string;
  skinId: { string: string };
  nonInstancedIndoorsName: { string: string };
  tileX: number;
  tileY: number;
  tilesWide: number;
  tilesHigh: number;
  maxOccupants: number;
  currentOccupants: number;
  daysOfConstructionLeft: number;
  daysUntilUpgrade: number;
  buildingType: string;
  buildingPaintColor: BuildingPaintColor;
  hayCapacity: number;
  buildingChests: BuildingChestsClass | string;
  humanDoor: ScaleElement;
  animalDoor: ScaleElement;
  animalDoorOpen: boolean;
  animalDoorOpenAmount: number;
  magical: boolean;
  fadeWhenPlayerIsBehind: boolean;
  owner: number | string;
  isMoving: boolean;
  indoors?: Indoors;
  upgradeName?: string;
  fishType?: { int: number };
  lastUnlockedPopulationGate?: { int: number };
  hasCompletedRequest?: { boolean: boolean };
  goldenAnimalCracker?: { boolean: boolean };
  sign?: Sign;
  overrideWaterColor?: OverrideWaterColor;
  output?: Output;
  neededItem?: { Item: string };
  neededItemCount?: { int: number };
  daysSinceSpawn?: { int: number };
  nettingStyle?: { int: number };
  seedOffset?: { int: number };
  hasSpawnedFish?: { boolean: boolean };
  input?: Input;
  watered?: boolean;
  petGuid?: string;
  HorseId?: string;
  cropHarvestRadius?: number;
  noHarvest?: boolean;
  wasLit?: boolean;
  raisinDays?: { int: number };
  shouldSendOutJunimos?: boolean;
}

export interface BuildingChestsClass {
  Chest: ChestElement[] | Output;
}

export interface ChestElement {
  isLostItem: boolean;
  category: number;
  hasBeenInInventory: boolean;
  name: string;
  parentSheetIndex: number;
  itemId: number;
  specialItem: boolean;
  isRecipe: boolean;
  quality: number;
  stack: number;
  SpecialVariable: number;
  tileLocation: ScaleElement;
  owner: number;
  type: TypeEnum;
  canBeSetDown: boolean;
  canBeGrabbed: boolean;
  isSpawnedObject: boolean;
  questItem: boolean;
  isOn: boolean;
  fragility: number;
  price: number;
  edibility: number;
  bigCraftable: boolean;
  setOutdoors: boolean;
  setIndoors: boolean;
  readyForHarvest: boolean;
  showNextIndex: boolean;
  flipped: boolean;
  isLamp: boolean;
  minutesUntilReady: number;
  boundingBox: BoundingBox;
  scale: ScaleElement;
  uses: number;
  destroyOvernight: boolean;
  currentLidFrame: number;
  lidFrameCount: { int: number };
  frameCounter: number;
  items: { Item: string } | string;
  separateWalletItems: SeparateWalletItems;
  tint: Color;
  playerChoiceColor: Color;
  playerChest: boolean;
  fridge: boolean;
  giftbox: boolean;
  giftboxIndex: number;
  giftboxIsStarterGift: { boolean: boolean };
  spriteIndexOverride: number;
  dropContents: boolean;
  synchronized: boolean;
  specialChestType: SpecialChestType;
  globalInventoryId: { string: string };
}

export interface SeparateWalletItems {
  SerializableDictionaryOfInt64Inventory: string;
}

export enum SpecialChestType {
  AutoLoader = 'AutoLoader',
  BigChest = 'BigChest',
  MiniShippingBin = 'MiniShippingBin',
  None = 'None',
}

export interface Output {
  isLostItem?: boolean;
  category?: number;
  hasBeenInInventory?: boolean;
  name?: string;
  parentSheetIndex?: number;
  itemId?: number;
  specialItem?: boolean;
  isRecipe?: boolean;
  quality?: number;
  stack?: number;
  SpecialVariable?: number;
  tileLocation?: ScaleElement;
  owner?: number;
  type?: TypeEnum;
  canBeSetDown?: boolean;
  canBeGrabbed?: boolean;
  isSpawnedObject?: boolean;
  questItem?: boolean;
  isOn?: boolean;
  fragility?: number;
  price?: number;
  edibility?: number;
  bigCraftable?: boolean;
  setOutdoors?: boolean;
  setIndoors?: boolean;
  readyForHarvest?: boolean;
  showNextIndex?: boolean;
  flipped?: boolean;
  isLamp?: boolean;
  minutesUntilReady?: number;
  boundingBox?: BoundingBox;
  scale?: ScaleElement;
  uses?: number;
  destroyOvernight?: boolean;
  currentLidFrame?: number;
  lidFrameCount?: { int: number };
  frameCounter?: number;
  items?: string;
  separateWalletItems?: SeparateWalletItems;
  tint?: Color;
  playerChoiceColor?: Color;
  playerChest?: boolean;
  fridge?: boolean;
  giftbox?: boolean;
  giftboxIndex?: number;
  giftboxIsStarterGift?: { boolean: boolean };
  spriteIndexOverride?: number;
  dropContents?: boolean;
  synchronized?: boolean;
  specialChestType?: SpecialChestType;
  globalInventoryId?: { string: string };
  Item?: DishOfTheDay;
  questId?: number;
  preservedParentSheetIndex?: number;
}

export interface BuildingPaintColor {
  ColorName: { string: string };
  Color1Default: { boolean: boolean };
  Color1Hue: { int: number };
  Color1Saturation: { int: number };
  Color1Lightness: { int: number };
  Color2Default: { boolean: boolean };
  Color2Hue: { int: number };
  Color2Saturation: { int: number };
  Color2Lightness: { int: number };
  Color3Default: { boolean: boolean };
  Color3Hue: { int: number };
  Color3Saturation: { int: number };
  Color3Lightness: { int: number };
}

export interface Indoors {
  buildings: string;
  animals: AnimalsClass | string;
  piecesOfHay: number;
  characters: PurpleCharacters | string;
  objects: IndoorsObjects;
  resourceClumps: string;
  largeTerrainFeatures: string;
  terrainFeatures: string;
  uniqueName: string;
  name: string;
  waterColor: Color;
  isFarm: boolean;
  isOutdoors: boolean;
  isStructure: boolean;
  ignoreDebrisWeather: boolean;
  ignoreOutdoorLighting: boolean;
  ignoreLights: boolean;
  treatAsOutdoors: boolean;
  numberOfSpawnedObjectsOnMap: number;
  miniJukeboxCount: number;
  miniJukeboxTrack: string;
  furniture: string;
  Animals: IndoorsAnimals;
  IsGreenhouse: boolean;
  animalLimit?: number;
  animalsThatLiveHere?: { long: string[] };
  wallPaper?: string;
  appliedWallpaper?: TrinketMetadata;
  floor?: string;
  appliedFloor?: IndoorsAppliedFloor;
  slimeMatingsLeft?: number;
  waterSpots?: { boolean: boolean[] };
}

export interface IndoorsAnimals {
  SerializableDictionaryOfInt64FarmAnimal: AnimalsClass | string;
}

export interface AnimalsClass {
  item: {
    key: { long: string };
    value: { FarmAnimal: FarmAnimal };
  }[];
}

export interface FarmAnimal {
  name: string;
  forceOneTileWide: boolean;
  isEmoting: boolean;
  isCharging: boolean;
  isGlowing: boolean;
  coloredBorder: boolean;
  flip: boolean;
  drawOnTop: boolean;
  faceTowardFarmer: boolean;
  ignoreMovementAnimation: boolean;
  faceAwayFromFarmer: boolean;
  scale: { float: number };
  glowingTransparency: number;
  glowRate: number;
  Gender: Gender;
  willDestroyObjectsUnderfoot: boolean;
  Position: ScaleElement;
  Speed: number;
  FacingDirection: number;
  IsEmoting: boolean;
  CurrentEmote: number;
  Scale: number;
  isSwimming: { boolean: boolean };
  currentProduce?: number;
  friendshipTowardFarmer: number;
  age: number;
  daysOwned: number;
  health: number;
  produceQuality: number;
  daysSinceLastLay: number;
  happiness: number;
  fullness: number;
  wasAutoPet: boolean;
  wasPet: boolean;
  allowReproduction: boolean;
  type: string;
  buildingTypeILiveIn: BuildingTypeILiveIn;
  myID: string;
  ownerID: string;
  parentId: number | string;
  hasEatenAnimalCracker: boolean;
  moodMessage: number;
  isEating: boolean;
  displayName: string;
}

export enum BuildingTypeILiveIn {
  Barn = 'Barn',
  Coop = 'Coop',
}

export interface IndoorsAppliedFloor {
  SerializableDictionaryOfStringString: {
    item: {
      key: { string: string };
      value: { string: number };
    };
  };
}

export interface TrinketMetadata {
  SerializableDictionaryOfStringString: string;
}

export interface PurpleCharacters {
  NPC: CharactersNPCClass[];
}

export interface CharactersNPCClass {
  name: Name;
  forceOneTileWide: boolean;
  isEmoting: boolean;
  isCharging: boolean;
  isGlowing: boolean;
  coloredBorder: boolean;
  flip: boolean;
  drawOnTop: boolean;
  faceTowardFarmer: boolean;
  ignoreMovementAnimation: boolean;
  faceAwayFromFarmer: boolean;
  scale: { float: number };
  glowingTransparency: number;
  glowRate: number;
  Gender: Gender;
  willDestroyObjectsUnderfoot: boolean;
  Position: ScaleElement;
  Speed: number;
  FacingDirection: number;
  IsEmoting: boolean;
  CurrentEmote: number;
  Scale: number;
  lastCrossroad: BoundingBox;
  daysAfterLastBirth: number;
  birthday_Day: number;
  age: number;
  manners: number;
  socialAnxiety: number;
  optimism: number;
  gender: Gender;
  sleptInBed: boolean;
  isInvisible: boolean;
  lastSeenMovieWeek: number;
  datingFarmer: string;
  divorcedFromFarmer: string;
  datable: boolean;
  id: number;
  daysUntilNotInvisible: number;
  followSchedule: boolean;
  moveTowardPlayerThreshold: number;
  hasBeenKissedToday: { boolean: boolean };
  shouldPlayRobinHammerAnimation: { boolean: boolean };
  shouldPlaySpousePatioAnimation: { boolean: boolean };
  shouldWearIslandAttire: { boolean: boolean };
  isMovingOnPathFindPath: { boolean: boolean };
  endOfRouteBehaviorName: { string: string };
  previousEndPoint: ScaleElement;
  squareMovementFacingPreference: number;
  DefaultFacingDirection: number;
  DefaultPosition: ScaleElement;
  IsWalkingInSquare: boolean;
  IsWalkingTowardPlayer: boolean;
  timeBeforeAIMovementAgain: number;
  damageToFarmer: number;
  health: number;
  maxHealth: number;
  resilience: number;
  slipperiness: number;
  experienceGained: number;
  jitteriness: number;
  missChance: number;
  isGlider: boolean;
  mineMonster: boolean;
  hasSpecialItem: boolean;
  objectsToDrop:
    | {
        int: number[] | number;
      }
    | string;
  stunTime: { int: number };
  initializedForLocation: boolean;
  ignoreDamageLOS: boolean;
  isHardModeMonster: boolean;
  stackedSlimes: { int: number };
  randomStackOffset: number;
  leftDrift: boolean;
  cute: boolean;
  readyToMate: number;
  ageUntilFullGrown: number;
  animateTimer: number;
  timeSinceLastJump: number;
  specialNumber: number;
  firstGeneration: boolean;
  color: Color;
  prismatic: { boolean: boolean };
}

export enum Name {
  FrostJelly = 'Frost Jelly',
  GreenSlime = 'Green Slime',
  Sludge = 'Sludge',
  TigerSlime = 'Tiger Slime',
}

export interface IndoorsObjects {
  item: ObjectsItemClass[];
}

export interface ObjectsItemClass {
  key: TentacledKey;
  value: TentacledValue;
}

export interface TentacledKey {
  Vector2: ScaleElement;
}

export interface TentacledValue {
  Object: Object;
}

export interface Object {
  isLostItem: boolean;
  category: number;
  hasBeenInInventory: boolean;
  name: string;
  parentSheetIndex: number;
  itemId: number;
  specialItem: boolean;
  isRecipe: boolean;
  quality: number;
  stack: number;
  SpecialVariable: number;
  tileLocation: ScaleElement;
  owner: number | string;
  type?: TypeEnum;
  canBeSetDown: boolean;
  canBeGrabbed: boolean;
  isSpawnedObject: boolean;
  questItem: boolean;
  questId?: number;
  isOn: boolean;
  fragility: number;
  price: number;
  edibility: number;
  bigCraftable: boolean;
  setOutdoors: boolean;
  setIndoors: boolean;
  readyForHarvest: boolean;
  showNextIndex: boolean;
  flipped: boolean;
  isLamp: boolean;
  minutesUntilReady: number;
  boundingBox: BoundingBox;
  scale: ScaleElement;
  uses: number;
  destroyOvernight: boolean;
  lastOutputRuleId?: string;
  lastInputItem?: DishOfTheDay;
  heldObject?: HeldObject;
  furniture_type?: number;
  rotations?: number;
  currentRotation?: number;
  sourceRect?: BoundingBox;
  defaultSourceRect?: BoundingBox;
  defaultBoundingBox?: BoundingBox;
  drawHeldObjectLow?: boolean;
}

export interface HeldObject {
  isLostItem: boolean;
  category: number;
  hasBeenInInventory: boolean;
  name: string;
  itemId: number;
  specialItem: boolean;
  isRecipe: boolean;
  quality: number;
  stack: number;
  SpecialVariable: number;
  tileLocation: ScaleElement;
  owner: number;
  type: TypeEnum;
  canBeSetDown: boolean;
  canBeGrabbed: boolean;
  isSpawnedObject: boolean;
  questItem: boolean;
  questId?: number;
  isOn: boolean;
  fragility: number;
  price: number;
  edibility: number;
  bigCraftable: boolean;
  setOutdoors: boolean;
  setIndoors: boolean;
  readyForHarvest: boolean;
  showNextIndex: boolean;
  flipped: boolean;
  isLamp: boolean;
  minutesUntilReady: number;
  boundingBox: BoundingBox;
  scale: ScaleElement;
  uses: number;
  destroyOvernight: boolean;
  currentLidFrame: number;
  lidFrameCount: { int: number };
  frameCounter: number;
  items: PurpleItems | string;
  separateWalletItems: SeparateWalletItems;
  tint: Color;
  playerChoiceColor: Color;
  playerChest: boolean;
  fridge: boolean;
  giftbox: boolean;
  giftboxIndex: number;
  giftboxIsStarterGift: { boolean: boolean };
  spriteIndexOverride: number;
  dropContents: boolean;
  synchronized: boolean;
  specialChestType: SpecialChestType;
  globalInventoryId: { string: string };
}

export interface PurpleItems {
  Item: DishOfTheDay[];
}

export interface Input {
  isLostItem: boolean;
  category: number;
  hasBeenInInventory: boolean;
  name: string;
  parentSheetIndex: number;
  specialItem: boolean;
  isRecipe: boolean;
  quality: number;
  stack: number;
  SpecialVariable: number;
  tileLocation: ScaleElement;
  owner: number;
  type: TypeEnum;
  canBeSetDown: boolean;
  canBeGrabbed: boolean;
  isSpawnedObject: boolean;
  questItem: boolean;
  questId: number;
  isOn: boolean;
  fragility: number;
  price: number;
  edibility: number;
  bigCraftable: boolean;
  setOutdoors: boolean;
  setIndoors: boolean;
  readyForHarvest: boolean;
  showNextIndex: boolean;
  flipped: boolean;
  isLamp: boolean;
  minutesUntilReady: number;
  boundingBox: BoundingBox;
  scale: ScaleElement;
  uses: number;
  preservedParentSheetIndex: number;
  destroyOvernight: boolean;
  currentLidFrame: number;
  lidFrameCount: { int: number };
  frameCounter: number;
  items: { Item: string[] };
  separateWalletItems: SeparateWalletItems;
  tint: Color;
  playerChoiceColor: Color;
  playerChest: boolean;
  fridge: boolean;
  giftbox: boolean;
  giftboxIndex: number;
  giftboxIsStarterGift: { boolean: boolean };
  spriteIndexOverride: number;
  dropContents: boolean;
  synchronized: boolean;
  specialChestType: SpecialChestType;
  globalInventoryId: { string: string };
}

export interface OverrideWaterColor {
  Color: Color;
}

export interface Sign {
  Object: string;
}

export interface ChestConsumedLevels {
  item: {
    key: { int: number };
    value: { boolean: boolean };
  }[];
}

export interface Bundles {
  item: {
    key: { int: number };
    value: {
      ArrayOfBoolean: { boolean: boolean[] };
    };
  }[];
}

export interface FluffyCharacters {
  NPC: PurpleNPC[] | FluffyNPC;
}

export interface PurpleNPC {
  name: string;
  forceOneTileWide: boolean;
  isEmoting: boolean;
  isCharging: boolean;
  isGlowing: boolean;
  coloredBorder: boolean;
  flip: boolean;
  drawOnTop: boolean;
  faceTowardFarmer: boolean;
  ignoreMovementAnimation: boolean;
  faceAwayFromFarmer: boolean;
  scale: { float: number };
  glowingTransparency: number;
  glowRate: number;
  Gender: Gender;
  willDestroyObjectsUnderfoot: boolean;
  Position: ScaleElement;
  Speed: number;
  FacingDirection: number;
  IsEmoting: boolean;
  CurrentEmote: number;
  Scale: number;
  lastCrossroad: BoundingBox;
  daysAfterLastBirth: number;
  birthday_Day: number;
  age: number;
  manners: number;
  socialAnxiety: number;
  optimism: number;
  gender: Gender;
  sleptInBed: boolean;
  isInvisible: boolean;
  lastSeenMovieWeek: number;
  datingFarmer: boolean | string;
  divorcedFromFarmer: boolean | string;
  datable: boolean;
  id: number;
  daysUntilNotInvisible: number;
  followSchedule: boolean;
  moveTowardPlayerThreshold: number;
  hasBeenKissedToday: { boolean: boolean };
  shouldPlayRobinHammerAnimation: { boolean: boolean };
  shouldPlaySpousePatioAnimation: { boolean: boolean };
  shouldWearIslandAttire: { boolean: boolean };
  isMovingOnPathFindPath: { boolean: boolean };
  endOfRouteBehaviorName: { string: string };
  previousEndPoint: ScaleElement;
  squareMovementFacingPreference: number;
  DefaultFacingDirection: number;
  DefaultPosition: ScaleElement;
  IsWalkingInSquare: boolean;
  IsWalkingTowardPlayer: boolean;
  ownerId?: { long: string };
  HorseId?: string;
  timeBeforeAIMovementAgain?: number;
  damageToFarmer?: number;
  health?: number;
  maxHealth?: number;
  resilience?: number;
  slipperiness?: number;
  experienceGained?: number;
  jitteriness?: number;
  missChance?: number;
  isGlider?: boolean;
  mineMonster?: boolean;
  hasSpecialItem?: boolean;
  objectsToDrop?: { int: number[] };
  stunTime?: { int: number };
  initializedForLocation?: boolean;
  ignoreDamageLOS?: boolean;
  isHardModeMonster?: boolean;
  guid?: string;
  petType?: string;
  whichBreed?: number;
  homeLocationName?: string;
  lastPetDay?: {
    item: {
      key: { long: string };
      value: { int: number };
    };
  };
  grantedFriendshipForPet?: boolean;
  friendshipTowardFarmer?: number;
  timesPet?: number;
  isSleepingOnFarmerBed?: { boolean: boolean };
  CurrentBehavior?: string;
  defaultMap?: string;
  daysOld?: number;
  idOfParent?: string;
  darkSkinned?: boolean;
  hat?: NPCHat;
  birthday_Season?: Season;
  loveInterest?: string;
  dayScheduleName?: DayScheduleNameEnum | number;
  mrs_raccoon?: boolean;
}

export enum DayScheduleNameEnum {
  Bus = 'bus',
  Fall = 'fall',
  Spring = 'spring',
  Tue = 'Tue',
}

export interface NPCHat {
  isLostItem: boolean;
  category: number;
  hasBeenInInventory: boolean;
  name: string;
  itemId: string;
  specialItem: boolean;
  isRecipe: boolean;
  quality: number;
  stack: number;
  SpecialVariable: number;
  which: string;
  skipHairDraw: boolean;
  ignoreHairstyleOffset: boolean;
  hairDrawType: number;
  isPrismatic: boolean;
}

export interface FluffyNPC {
  name: string;
  forceOneTileWide: boolean;
  isEmoting: boolean;
  isCharging: boolean;
  isGlowing: boolean;
  coloredBorder: boolean;
  flip: boolean;
  drawOnTop: boolean;
  faceTowardFarmer: boolean;
  ignoreMovementAnimation: boolean;
  faceAwayFromFarmer: boolean;
  scale: { float: number };
  glowingTransparency: number;
  glowRate: number;
  Gender: Gender;
  willDestroyObjectsUnderfoot: boolean;
  Position: ScaleElement;
  Speed: number;
  FacingDirection: number;
  IsEmoting: boolean;
  CurrentEmote: number;
  Scale: number;
  lastCrossroad: BoundingBox;
  daysAfterLastBirth: number;
  birthday_Season?: Season;
  birthday_Day: number;
  age: number;
  manners: number;
  socialAnxiety: number;
  optimism: number;
  gender: Gender;
  sleptInBed: boolean;
  isInvisible: boolean;
  lastSeenMovieWeek: number;
  datingFarmer: boolean | string;
  divorcedFromFarmer: boolean | string;
  datable: boolean;
  defaultMap?: string;
  loveInterest?: string;
  id: number;
  daysUntilNotInvisible: number;
  followSchedule: boolean;
  moveTowardPlayerThreshold: number;
  hasBeenKissedToday: { boolean: boolean };
  shouldPlayRobinHammerAnimation: { boolean: boolean };
  shouldPlaySpousePatioAnimation: { boolean: boolean };
  shouldWearIslandAttire: { boolean: boolean };
  isMovingOnPathFindPath: { boolean: boolean };
  dayScheduleName?: DayScheduleNameEnum;
  endOfRouteBehaviorName: { string: string };
  previousEndPoint: ScaleElement;
  squareMovementFacingPreference: number;
  DefaultFacingDirection: number;
  DefaultPosition: ScaleElement;
  IsWalkingInSquare: boolean;
  IsWalkingTowardPlayer: boolean;
}

export interface Fridge {
  isLostItem: boolean;
  category: number;
  hasBeenInInventory: boolean;
  name: string;
  parentSheetIndex: number;
  itemId: number;
  specialItem: boolean;
  isRecipe: boolean;
  quality: number;
  stack: number;
  SpecialVariable: number;
  tileLocation: ScaleElement;
  owner: number;
  type: TypeEnum;
  canBeSetDown: boolean;
  canBeGrabbed: boolean;
  isSpawnedObject: boolean;
  questItem: boolean;
  questId: number;
  isOn: boolean;
  fragility: number;
  price: number;
  edibility: number;
  bigCraftable: boolean;
  setOutdoors: boolean;
  setIndoors: boolean;
  readyForHarvest: boolean;
  showNextIndex: boolean;
  flipped: boolean;
  isLamp: boolean;
  minutesUntilReady: number;
  boundingBox: BoundingBox;
  scale: ScaleElement;
  uses: number;
  preservedParentSheetIndex: number;
  destroyOvernight: boolean;
  currentLidFrame: number;
  lidFrameCount: { int: number };
  frameCounter: number;
  items: FluffyItems | string;
  separateWalletItems: SeparateWalletItems;
  tint: Color;
  playerChoiceColor: Color;
  playerChest: boolean;
  fridge: boolean;
  giftbox: boolean;
  giftboxIndex: number;
  giftboxIsStarterGift: { boolean: boolean };
  spriteIndexOverride: number;
  dropContents: boolean;
  synchronized: boolean;
  specialChestType: SpecialChestType;
  globalInventoryId: { string: string };
}

export interface FluffyItems {
  Item: HeldObjectElement[];
}

export interface HeldObjectElement {
  isLostItem: boolean;
  category: number;
  hasBeenInInventory: boolean;
  name?: string;
  parentSheetIndex: number;
  itemId: number | string;
  specialItem: boolean;
  isRecipe: boolean;
  quality: number;
  stack: number;
  SpecialVariable: number;
  tileLocation: ScaleElement;
  owner: number;
  type?: TypeEnum;
  canBeSetDown: boolean;
  canBeGrabbed: boolean;
  isSpawnedObject: boolean;
  questItem: boolean;
  questId?: number;
  isOn: boolean;
  fragility: number;
  price: number;
  edibility: number;
  bigCraftable: boolean;
  setOutdoors: boolean;
  setIndoors: boolean;
  readyForHarvest: boolean;
  showNextIndex: boolean;
  flipped: boolean;
  isLamp: boolean;
  minutesUntilReady: number;
  boundingBox: BoundingBox;
  scale: ScaleElement;
  uses: number;
  destroyOvernight: boolean;
  preserve?: Preserve;
  preservedParentSheetIndex?: number;
  displayNameOverrideTemplate?: { string: string };
  descriptionSubstitutionTemplates?: {
    string: number[];
  };
  trinketMetadata?: TrinketMetadata;
  generationSeed?: number;
  color?: Color;
  colorSameIndexAsParentSheetIndex?: boolean;
  ColorSameIndexAsParentSheetIndex?: boolean;
}

export interface FurnitureClass {
  Furniture: FurnitureElement[] | PurpleFurniture;
}

export interface FurnitureElement {
  isLostItem: boolean;
  category: number;
  hasBeenInInventory: boolean;
  name: string;
  parentSheetIndex: number;
  itemId: number | string;
  specialItem: boolean;
  isRecipe: boolean;
  quality: number;
  stack: number;
  SpecialVariable: number;
  tileLocation: ScaleElement;
  owner: number | string;
  canBeSetDown: boolean;
  canBeGrabbed: boolean;
  isSpawnedObject: boolean;
  questItem: boolean;
  questId?: number;
  isOn: boolean;
  fragility: number;
  price: number;
  edibility: number;
  bigCraftable: boolean;
  setOutdoors: boolean;
  setIndoors: boolean;
  readyForHarvest: boolean;
  showNextIndex: boolean;
  flipped: boolean;
  isLamp: boolean;
  minutesUntilReady: number;
  boundingBox: BoundingBox;
  scale: ScaleElement;
  uses: number;
  destroyOvernight: boolean;
  furniture_type: number;
  rotations: number;
  currentRotation: number;
  sourceRect: BoundingBox;
  defaultSourceRect: BoundingBox;
  defaultBoundingBox: BoundingBox;
  drawHeldObjectLow: boolean;
  bedType?: string;
  heldObject?: Object;
  topIndex?: { int: number };
  middleIndex?: { int: number };
  bottomIndex?: { int: number };
}

export interface PurpleFurniture {
  isLostItem: boolean;
  category: number;
  hasBeenInInventory: boolean;
  name: string;
  parentSheetIndex: number;
  itemId: string;
  specialItem: boolean;
  isRecipe: boolean;
  quality: number;
  stack: number;
  SpecialVariable: number;
  tileLocation: ScaleElement;
  owner: number;
  canBeSetDown: boolean;
  canBeGrabbed: boolean;
  isSpawnedObject: boolean;
  questItem: boolean;
  isOn: boolean;
  fragility: number;
  price: number;
  edibility: number;
  bigCraftable: boolean;
  setOutdoors: boolean;
  setIndoors: boolean;
  readyForHarvest: boolean;
  showNextIndex: boolean;
  flipped: boolean;
  isLamp: boolean;
  minutesUntilReady: number;
  boundingBox: BoundingBox;
  scale: ScaleElement;
  uses: number;
  destroyOvernight: boolean;
  furniture_type: number;
  rotations: number;
  currentRotation: number;
  sourceRect: BoundingBox;
  defaultSourceRect: BoundingBox;
  defaultBoundingBox: BoundingBox;
  drawHeldObjectLow: boolean;
  generationSeed: { int: number };
}

export interface LargeTerrainFeaturesClass {
  LargeTerrainFeature: LargeTerrainFeature[] | LargeTerrainFeature;
}

export interface LargeTerrainFeature {
  tilePosition: ScaleElement;
  isDestroyedByNPCTrample: boolean;
  size: number;
  datePlanted: number;
  tileSheetOffset: number;
  health: number;
  flipped: boolean;
  townBush: boolean;
  inPot: { boolean: boolean };
  drawShadow: boolean;
}

export enum MiniJukeboxTrack {
  Empty = '',
  FieldofficeTentMusic = 'fieldofficeTentMusic',
}

export interface MuseumPieces {
  item: {
    key: TentacledKey;
    value: { string: number };
  }[];
}

export interface ObjectsObjects {
  item: TentacledItem[] | IndigoItem;
}

export interface TentacledItem {
  key: TentacledKey;
  value: IndigoValue;
}

export interface IndigoValue {
  Object: PurpleObject;
}

export interface PurpleObject {
  isLostItem: boolean;
  category: number;
  hasBeenInInventory: boolean;
  name: string;
  parentSheetIndex: number;
  itemId: number | string;
  specialItem: boolean;
  isRecipe: boolean;
  quality: number;
  stack: number;
  SpecialVariable: number;
  tileLocation: ScaleElement;
  owner: number | string;
  type: TypeEnum;
  canBeSetDown: boolean;
  canBeGrabbed: boolean;
  isSpawnedObject: boolean;
  questItem: boolean;
  isOn: boolean;
  fragility: number;
  price: number;
  edibility: number;
  bigCraftable: boolean;
  setOutdoors: boolean;
  setIndoors: boolean;
  readyForHarvest: boolean;
  showNextIndex: boolean;
  flipped: boolean;
  isLamp: boolean;
  minutesUntilReady: number;
  boundingBox: BoundingBox;
  scale: ScaleElement;
  uses: number;
  destroyOvernight: boolean;
  currentLidFrame?: number;
  lidFrameCount?: { int: number };
  frameCounter?: number;
  items?: TentacledItems | string;
  separateWalletItems?: SeparateWalletItems;
  tint?: Color;
  playerChoiceColor?: Color;
  playerChest?: boolean;
  fridge?: boolean;
  giftbox?: boolean;
  giftboxIndex?: number;
  giftboxIsStarterGift?: { boolean: boolean };
  spriteIndexOverride?: number;
  dropContents?: boolean;
  synchronized?: boolean;
  specialChestType?: SpecialChestType;
  globalInventoryId?: { string: string };
  lastOutputRuleId?: string;
  lastInputItem?: HeldObjectElement;
  health?: number;
  maxHealth?: number;
  whichType?: string;
  gatePosition?: number;
  gateMotion?: number;
  isGate?: boolean;
  heldObject?: HeldObjectElement;
  modData?: ModData;
  questId?: number;
  directionOffset?: ScaleElement;
  tileIndexToShow?: number;
  hoeDirt?: { state: number };
  bush?: LargeTerrainFeature;
  TileLocation?: ScaleElement;
  agingRate?: number;
  daysToMature?: number;
  preservedParentSheetIndex?: number;
  requiredItem?: DishOfTheDay;
  successColor?: Color;
  lockOnSuccess?: boolean;
  locked?: boolean;
  match?: boolean;
  isIslandShrinePedestal?: boolean;
}

export interface TentacledItems {
  Item: StickyItem[] | DishOfTheDay;
}

export interface StickyItem {
  isLostItem: boolean;
  category: number;
  hasBeenInInventory: boolean;
  name?: string;
  parentSheetIndex?: number;
  itemId: number | string;
  specialItem: boolean;
  isRecipe: boolean;
  quality: number;
  stack: number;
  SpecialVariable: number;
  tileLocation?: ScaleElement;
  owner?: number | string;
  type?: TypeEnum | number;
  canBeSetDown?: boolean;
  canBeGrabbed?: boolean;
  isSpawnedObject?: boolean;
  questItem?: boolean;
  isOn?: boolean;
  fragility?: number;
  price?: number;
  edibility?: number;
  bigCraftable?: boolean;
  setOutdoors?: boolean;
  setIndoors?: boolean;
  readyForHarvest?: boolean;
  showNextIndex?: boolean;
  flipped?: boolean;
  isLamp?: boolean;
  minutesUntilReady?: number;
  boundingBox?: BoundingBox;
  scale?: ScaleElement;
  uses?: number;
  destroyOvernight?: boolean;
  questId?: number;
  color?: Color;
  colorSameIndexAsParentSheetIndex?: boolean;
  ColorSameIndexAsParentSheetIndex?: boolean;
  preserve?: Preserve;
  preservedParentSheetIndex?: number | string;
  initialParentTileIndex?: number;
  currentParentTileIndex?: number;
  indexOfMenuItemView?: number;
  instantUse?: boolean;
  isEfficient?: boolean;
  animationSpeedModifier?: number;
  swingTicker?: number;
  upgradeLevel?: number;
  numAttachmentSlots?: number;
  attachments?: PurpleAttachments | string;
  InitialParentTileIndex?: number;
  IndexOfMenuItemView?: number;
  InstantUse?: boolean;
  IsEfficient?: boolean;
  AnimationSpeedModifier?: number;
  CastDirection?: number;
  indexInTileSheet?: number | string;
  uniqueID?: number;
  furniture_type?: number;
  rotations?: number;
  currentRotation?: number;
  sourceRect?: BoundingBox;
  defaultSourceRect?: BoundingBox;
  defaultBoundingBox?: BoundingBox;
  drawHeldObjectLow?: boolean;
  isFloor?: boolean;
  sourceTexture?: string;
  generationSeed?: { int: number } | number;
  bedType?: string;
  hat?: { Hat: string };
  shirt?: { Clothing: string };
  pants?: { Clothing: string };
  boots?: { Boots: string };
  facing?: { int: number };
  swappedWithFarmerTonight?: { boolean: boolean };
  displayNameOverrideTemplate?: { string: string };
  descriptionSubstitutionTemplates?:
    | DescriptionSubstitutionTemplatesDescriptionSubstitutionTemplates
    | string;
  trinketMetadata?: TrinketMetadata;
  defenseBonus?: number;
  immunityBonus?: number;
  indexInColorSheet?: number;
  indexInTileSheetFemale?: number | string;
  clothesType?: ClothesType;
  dyeable?: boolean;
  clothesColor?: Color;
  isPrismatic?: boolean;
  Price?: number;
  which?: string;
  skipHairDraw?: boolean;
  ignoreHairstyleOffset?: boolean;
  hairDrawType?: number;
  minDamage?: number;
  maxDamage?: number;
  speed?: number;
  addedPrecision?: number;
  addedDefense?: number;
  addedAreaOfEffect?: number;
  knockback?: number;
  critChance?: number;
  critMultiplier?: number;
  isOnSpecial?: boolean;
  enchantments?: { level: number }[] | { level: number };
}

export interface PurpleAttachments {
  Object: string[] | DishOfTheDay | string;
}

export enum ClothesType {
  Pants = 'PANTS',
  Shirt = 'SHIRT',
}

export interface DescriptionSubstitutionTemplatesDescriptionSubstitutionTemplates {
  string: Array<number | StringEnum>;
}

export enum StringEnum {
  LocalizedTextStrings1_6_StringsParrotEggChance0 = '[LocalizedText Strings\\1_6_Strings:ParrotEgg_Chance_0]',
  LocalizedTextStrings1_6_StringsParrotEggChance1 = '[LocalizedText Strings\\1_6_Strings:ParrotEgg_Chance_1]',
  LocalizedTextStrings1_6_StringsParrotEggChance2 = '[LocalizedText Strings\\1_6_Strings:ParrotEgg_Chance_2]',
  LocalizedTextStrings1_6_StringsParrotEggChance3 = '[LocalizedText Strings\\1_6_Strings:ParrotEgg_Chance_3]',
}

export interface ModData {
  item:
    | {
        key: { string: string };
        value: { string: number | string };
      }[]
    | {
        key: { string: string };
        value: { string: string };
      };
}

export interface IndigoItem {
  key: TentacledKey;
  value: IndecentValue;
}

export interface IndecentValue {
  Object: DishOfTheDay;
}

export interface RaceTrack {
  ArrayOfVector3: ArrayOfVector3[];
}

export interface ArrayOfVector3 {
  Vector3: Vector3[];
}

export interface Vector3 {
  X: number;
  Y: number;
  Z: number;
}

export interface ResourceClumpsClass {
  ResourceClump: ResourceClump[];
}

export interface ResourceClump {
  width: number;
  height: number;
  parentSheetIndex: number;
  health: number;
  tile: ScaleElement;
}

export interface TerrainFeaturesClass {
  item: TerrainFeaturesItem[];
}

export interface TerrainFeaturesItem {
  key: TentacledKey;
  value: HilariousValue;
}

export interface HilariousValue {
  TerrainFeature: TerrainFeature;
}

export interface TerrainFeature {
  grassType?: number;
  numberOfWeeds?: number;
  grassSourceOffset?: number;
  state?: number;
  fertilizer?: Fertilizer;
  crop?: Crop;
  growthStage?: number;
  treeType?: number;
  health?: number;
  flipped?: boolean;
  stump?: boolean;
  tapped?: boolean;
  hasSeed?: boolean;
  hasMoss?: boolean;
  isTemporaryGreenRainTree?: boolean;
  fertilized?: boolean;
  treeId?: number;
  daysUntilMature?: number;
  fruitsOnTree?: string;
  struckByLightningCountdown?: number;
  greenHouseTileTree?: boolean;
  growthRate?: number;
  fruit?: DishOfTheDay;
}

export interface Crop {
  phaseDays: { int: number[] } | string;
  rowInSpriteSheet: number;
  phaseToShow: number;
  currentPhase: number;
  indexOfHarvest?: IndexOfHarvestEnum | number;
  dayOfCurrentPhase: number;
  tintColor: Color;
  flip: boolean;
  fullGrown: boolean;
  raisedSeeds: boolean;
  programColored: boolean;
  dead: boolean;
  forageCrop: boolean;
  seedIndex?: SeedIndexEnum | number;
  whichForageCrop?: number;
}

export enum IndexOfHarvestEnum {
  Broccoli = 'Broccoli',
}

export enum SeedIndexEnum {
  BroccoliSeeds = 'BroccoliSeeds',
}

export enum Fertilizer {
  O369 = '(O)369',
  O465 = '(O)465',
  O466 = '(O)466',
  O919 = '(O)919',
}

export interface MinePermanentMineChanges {
  item: MinePermanentMineChangesItem[];
}

export interface MinePermanentMineChangesItem {
  key: { int: number };
  value: AmbitiousValue;
}

export interface AmbitiousValue {
  MineInfo: MineInfo;
}

export interface MineInfo {
  platformContainersLeft: number;
  chestsLeft: number;
  coalCartsLeft: number;
  elevator: number;
}

export interface Options {
  autoRun: boolean;
  dialogueTyping: boolean;
  showPortraits: boolean;
  showMerchantPortraits: boolean;
  showMenuBackground: boolean;
  playFootstepSounds: boolean;
  alwaysShowToolHitLocation: boolean;
  hideToolHitLocationWhenInMotion: boolean;
  pauseWhenOutOfFocus: boolean;
  pinToolbarToggle: boolean;
  mouseControls: boolean;
  gamepadControls: boolean;
  rumble: boolean;
  ambientOnlyToggle: boolean;
  zoomButtons: boolean;
  invertScrollDirection: boolean;
  screenFlash: boolean;
  showPlacementTileForGamepad: boolean;
  snappyMenus: boolean;
  showAdvancedCraftingInformation: boolean;
  showMPEndOfNightReadyStatus: boolean;
  muteAnimalSounds: boolean;
  vsyncEnabled: boolean;
  fullscreen: boolean;
  windowedBorderlessFullscreen: boolean;
  showClearBackgrounds: boolean;
  ipConnectionsEnabled: boolean;
  enableServer: boolean;
  enableFarmhandCreation: boolean;
  stowingMode: string;
  gamepadMode: string;
  useLegacySlingshotFiring: boolean;
  musicVolumeLevel: number;
  soundVolumeLevel: number;
  footstepVolumeLevel: number;
  ambientVolumeLevel: number;
  snowTransparency: number;
  zoomLevel: number;
  localCoopBaseZoomLevel: number;
  uiScale: number;
  localCoopDesiredUIScale: number;
  preferredResolutionX: number;
  preferredResolutionY: number;
  serverPrivacy: string;
  actionButton: Button;
  cancelButton: CancelButton;
  useToolButton: Button;
  moveUpButton: CancelButton;
  moveRightButton: CancelButton;
  moveDownButton: CancelButton;
  moveLeftButton: CancelButton;
  menuButton: Button;
  runButton: CancelButton;
  tmpKeyToReplace: CancelButton;
  chatButton: Button;
  mapButton: CancelButton;
  journalButton: CancelButton;
  inventorySlot1: CancelButton;
  inventorySlot2: CancelButton;
  inventorySlot3: CancelButton;
  inventorySlot4: CancelButton;
  inventorySlot5: CancelButton;
  inventorySlot6: CancelButton;
  inventorySlot7: CancelButton;
  inventorySlot8: CancelButton;
  inventorySlot9: CancelButton;
  inventorySlot10: CancelButton;
  inventorySlot11: CancelButton;
  inventorySlot12: CancelButton;
  toolbarSwap: CancelButton;
  emoteButton: CancelButton;
  hardwareCursor: boolean;
}

export interface Button {
  InputButton: {
    key: string;
    mouseLeft: boolean;
    mouseRight: boolean;
  }[];
}

export interface CancelButton {
  InputButton: {
    key: string;
    mouseLeft: boolean;
    mouseRight: boolean;
  };
}

export interface Player {
  name: string;
  forceOneTileWide: boolean;
  isEmoting: boolean;
  isCharging: boolean;
  isGlowing: boolean;
  coloredBorder: boolean;
  flip: boolean;
  drawOnTop: boolean;
  faceTowardFarmer: boolean;
  ignoreMovementAnimation: boolean;
  faceAwayFromFarmer: boolean;
  scale: { float: number };
  glowingTransparency: number;
  glowRate: number;
  Gender: Gender;
  willDestroyObjectsUnderfoot: boolean;
  Position: ScaleElement;
  Speed: number;
  FacingDirection: number;
  IsEmoting: boolean;
  CurrentEmote: number;
  Scale: number;
  modData: {
    item: {
      key: { string: string };
      value: { string: string };
    }[];
  };
  questLog: string;
  professions: { int: number[] };
  newLevels: string;
  experiencePoints: { int: number[] };
  items: PlayerItems;
  dialogueQuestionsAnswered: { int: number[] };
  cookingRecipes: LimitedNutDrops;
  craftingRecipes: LimitedNutDrops;
  activeDialogueEvents: LimitedNutDrops;
  previousActiveDialogueEvents: LimitedNutDrops;
  triggerActionsRun: { string: string[] };
  eventsSeen: { int: Array<number | string> };
  secretNotesSeen: { int: number[] };
  songsHeard: { string: string[] };
  achievements: { int: number[] };
  specialItems: { int: number[] };
  specialBigCraftables: { int: number[] };
  mailReceived: { string: string[] };
  mailForTomorrow: string;
  mailbox: { string: string };
  locationsVisited: { string: string[] };
  timeWentToBed: { int: number };
  sleptInTemporaryBed: { boolean: boolean };
  stats: Stats;
  biteChime: number;
  itemsLostLastDeath: string;
  movementDirections: string;
  farmName: string;
  favoriteThing: string;
  horseName: string;
  slotCanHost: boolean;
  userID: string;
  catPerson: string;
  canUnderstandDwarves: string;
  hasClubCard: string;
  hasDarkTalisman: string;
  hasMagicInk: string;
  hasMagnifyingGlass: string;
  hasRustyKey: string;
  hasSkullKey: string | boolean;
  hasSpecialCharm: string;
  HasTownKey: string;
  hasUnlockedSkullDoor: string;
  daysMarried: string;
  whichPetType: string;
  whichPetBreed: number;
  acceptedDailyQuest: boolean;
  mostRecentBed: ScaleElement;
  shirt: number;
  hair: number;
  skin: number;
  shoes: number;
  accessory: number;
  facialHair: number;
  pants: number;
  hairstyleColor: Color;
  pantsColor: Color;
  newEyeColor: Color;
  hat: NPCHat;
  boots: PlayerBoots;
  leftRing: Ring;
  rightRing: Ring;
  shirtItem: ShirtItem;
  pantsItem: PantsItem;
  divorceTonight: boolean;
  changeWalletTypeTonight: boolean;
  gameVersion: string;
  bibberstyke: number;
  usingRandomizedBobber: boolean;
  caveChoice: number;
  farmingLevel: number;
  miningLevel: number;
  combatLevel: number;
  foragingLevel: number;
  fishingLevel: number;
  luckLevel: number;
  maxStamina: number;
  maxItems: number;
  lastSeenMovieWeek: number;
  clubCoins: number;
  trashCanLevel: number;
  daysLeftForToolUpgrade: number;
  houseUpgradeLevel: number;
  daysUntilHouseUpgrade: number;
  showChestColorPicker: boolean;
  hasWateringCanEnchantment: boolean;
  temporaryInvincibilityTimer: number;
  currentTemporaryInvincibilityDuration: number;
  health: number;
  maxHealth: number;
  difficultyModifier: number;
  gender: Gender;
  basicShipped: BasicShipped;
  mineralsFound: MineralsFound;
  recipesCooked: BasicShipped;
  fishCaught: FishCaught;
  archaeologyFound: {
    item: {
      key: { string: number };
      value: { ArrayOfInt: { int: number[] } };
    }[];
  };
  callsReceived: CallsReceived;
  giftedItems: GiftedItems;
  tailoredItems: {
    item: {
      key: { string: string };
      value: { int: number };
    };
  };
  friendshipData: FriendshipData;
  dayOfMonthForSaveGame: number;
  seasonForSaveGame: number;
  yearForSaveGame: number;
  qiGems: number;
  JOTPKProgress: JOTPKProgress;
  trinketItem: TrinketItem;
  chestConsumedLevels: ChestConsumedLevels;
  saveTime: number;
  isCustomized: boolean;
  homeLocation: string;
  lastSleepLocation: string;
  lastSleepPoint: ScaleElement;
  disconnectDay: number;
  disconnectPosition: ScaleElement;
  movementMultiplier: number;
  isMale: string;
  deepestMineLevel: number;
  stamina: number;
  totalMoneyEarned: number;
  millisecondsPlayed: number;
  useSeparateWallets: boolean;
  theaterBuildDate: number;
  timesReachedMineBottom: number;
  spouse: string;
  UniqueMultiplayerID: string;
  money: number;
}

export interface JOTPKProgress {
  bulletDamage: { int: number };
  fireSpeedLevel: { int: number };
  ammoLevel: { int: number };
  spreadPistol: { boolean: boolean };
  runSpeedLevel: { int: number };
  lives: { int: number };
  coins: { int: number };
  score: { int: number };
  died: { boolean: boolean };
  whichRound: { int: number };
  whichWave: { int: number };
  heldItem: { int: number };
  world: { int: number };
  waveTimer: { int: number };
  monsterChances: { Vector2: ScaleElement[] };
}

export interface BasicShipped {
  item: {
    key: { string: number | string };
    value: { int: number };
  }[];
}

export interface PlayerBoots {
  isLostItem: boolean;
  category: number;
  hasBeenInInventory: boolean;
  name: string;
  itemId: number;
  specialItem: boolean;
  isRecipe: boolean;
  quality: number;
  stack: number;
  SpecialVariable: number;
  defenseBonus: number;
  immunityBonus: number;
  indexInTileSheet: number;
  price: number;
  indexInColorSheet: number;
}

export interface CallsReceived {
  item: {
    key: { string: number };
    value: { int: number };
  };
}

export interface FishCaught {
  item: {
    key: { string: string };
    value: {
      ArrayOfInt: { int: number[] };
    };
  }[];
}

export interface FriendshipData {
  item: FriendshipDataItem[];
}

export interface FriendshipDataItem {
  key: { string: string };
  value: MagentaValue;
}

export interface MagentaValue {
  Friendship: Friendship;
}

export interface Friendship {
  Points: number;
  GiftsThisWeek: number;
  GiftsToday: number;
  LastGiftDate?: LastGiftDateClass;
  TalkedToToday: boolean;
  ProposalRejected: boolean;
  Status: Status;
  Proposer: number;
  RoommateMarriage: boolean;
  WeddingDate?: LastGiftDateClass;
}

export interface LastGiftDateClass {
  Year: number;
  DayOfMonth: number;
  Season: Season;
}

export enum Status {
  Dating = 'Dating',
  Friendly = 'Friendly',
  Married = 'Married',
}

export interface GiftedItems {
  item: GiftedItemsItem[];
}

export interface GiftedItemsItem {
  key: { string: string };
  value: FriskyValue;
}

export interface FriskyValue {
  dictionary: Dictionary;
}

export interface Dictionary {
  item:
    | {
        key: { string: number | string };
        value: { int: number };
      }[]
    | {
        key: { string: number };
        value: { int: number };
      };
}

export interface PlayerItems {
  Item: Array<IndecentItem | string>;
}

export interface IndecentItem {
  isLostItem: boolean;
  category: number;
  hasBeenInInventory: boolean;
  name: string;
  itemId: number | string;
  specialItem: boolean;
  isRecipe: boolean;
  quality: number;
  stack: number;
  SpecialVariable: number;
  initialParentTileIndex?: number;
  currentParentTileIndex?: number;
  indexOfMenuItemView?: number;
  instantUse?: boolean;
  isEfficient?: boolean;
  animationSpeedModifier?: number;
  swingTicker?: number;
  upgradeLevel?: number;
  numAttachmentSlots?: number;
  attachments?: FluffyAttachments | string;
  InitialParentTileIndex?: number;
  IndexOfMenuItemView?: number;
  InstantUse?: boolean;
  IsEfficient?: boolean;
  AnimationSpeedModifier?: number;
  additionalPower?: { int: number };
  previousEnchantments?: string[];
  type?: TypeEnum | number;
  minDamage?: number;
  maxDamage?: number;
  speed?: number;
  addedPrecision?: number;
  addedDefense?: number;
  addedAreaOfEffect?: number;
  knockback?: number;
  critChance?: number;
  critMultiplier?: number;
  isOnSpecial?: boolean;
  CastDirection?: number;
  isBottomless?: boolean;
  WaterLeft?: number;
  IsBottomless?: boolean;
  parentSheetIndex?: number;
  tileLocation?: ScaleElement;
  owner?: number;
  canBeSetDown?: boolean;
  canBeGrabbed?: boolean;
  isSpawnedObject?: boolean;
  questItem?: boolean;
  isOn?: boolean;
  fragility?: number;
  price?: number;
  edibility?: number;
  bigCraftable?: boolean;
  setOutdoors?: boolean;
  setIndoors?: boolean;
  readyForHarvest?: boolean;
  showNextIndex?: boolean;
  flipped?: boolean;
  isLamp?: boolean;
  minutesUntilReady?: number;
  boundingBox?: BoundingBox;
  scale?: ScaleElement;
  uses?: number;
  destroyOvernight?: boolean;
}

export interface FluffyAttachments {
  Object: Array<DishOfTheDay | string>;
}

export interface CombinedRings {
  Ring: Ring[];
}

export interface Ring {
  isLostItem: boolean;
  category: number;
  hasBeenInInventory: boolean;
  name: string;
  parentSheetIndex: number;
  itemId: number;
  specialItem: boolean;
  isRecipe: boolean;
  quality: number;
  stack: number;
  SpecialVariable: number;
  price: number;
  indexInTileSheet: string;
  uniqueID: number;
  combinedRings?: CombinedRings;
}

export interface MineralsFound {
  item: {
    key: { string: number };
    value: { int: number };
  }[];
}

export interface PantsItem {
  isLostItem: boolean;
  category: number;
  hasBeenInInventory: boolean;
  name: string;
  itemId: number;
  specialItem: boolean;
  isRecipe: boolean;
  quality: number;
  stack: number;
  SpecialVariable: number;
  price: number;
  indexInTileSheet: number;
  indexInTileSheetFemale: string;
  clothesType: ClothesType;
  dyeable: boolean;
  clothesColor: Color;
  isPrismatic: boolean;
  Price: number;
}

export interface ShirtItem {
  isLostItem: boolean;
  category: number;
  hasBeenInInventory: boolean;
  name: string;
  itemId: string;
  specialItem: boolean;
  isRecipe: boolean;
  quality: number;
  stack: number;
  SpecialVariable: number;
  price: number;
  indexInTileSheet: number;
  indexInTileSheetFemale: string;
  clothesType: ClothesType;
  dyeable: boolean;
  clothesColor: Color;
  isPrismatic: boolean;
  Price: number;
}

export interface Stats {
  specificMonstersKilled: {
    item: {
      key: { string: string };
      value: {
        int: number;
      };
    }[];
  };
  Values: {
    item: {
      key: { string: string };
      value: {
        unsignedInt: number;
      };
    }[];
  };
  averageBedtime: string;
  beveragesMade: string;
  caveCarrotsFound: string;
  cheeseMade: string;
  chickenEggsLayed: string;
  copperFound: string;
  cowMilkProduced: string;
  cropsShipped: string;
  daysPlayed: string;
  diamondsFound: string;
  dirtHoed: string;
  duckEggsLayed: string;
  fishCaught: string;
  geodesCracked: string;
  giftsGiven: string;
  goatCheeseMade: string;
  goatMilkProduced: string;
  goldFound: string;
  goodFriends: string;
  individualMoneyEarned: string;
  iridiumFound: string;
  ironFound: string;
  itemsCooked: string;
  itemsCrafted: string;
  itemsForaged: string;
  itemsShipped: string;
  monstersKilled: string;
  mysticStonesCrushed: string;
  notesFound: string;
  otherPreciousGemsFound: string;
  piecesOfTrashRecycled: string;
  preservesMade: string;
  prismaticShardsFound: string;
  questsCompleted: string;
  rabbitWoolProduced: string;
  rocksCrushed: string;
  sheepWoolProduced: string;
  slimesKilled: string;
  stepsTaken: string;
  stoneGathered: string;
  stumpsChopped: string;
  timesFished: string;
  timesUnconscious: string;
  totalMoneyGifted: string;
  trufflesFound: string;
  weedsEliminated: string;
  seedsSown: string;
}

export interface TrinketItem {
  isLostItem: boolean;
  category: number;
  hasBeenInInventory: boolean;
  parentSheetIndex: number;
  itemId: string;
  specialItem: boolean;
  isRecipe: boolean;
  quality: number;
  stack: number;
  SpecialVariable: number;
  tileLocation: ScaleElement;
  owner: number;
  canBeSetDown: boolean;
  canBeGrabbed: boolean;
  isSpawnedObject: boolean;
  questItem: boolean;
  isOn: boolean;
  fragility: number;
  price: number;
  edibility: number;
  bigCraftable: boolean;
  setOutdoors: boolean;
  setIndoors: boolean;
  readyForHarvest: boolean;
  showNextIndex: boolean;
  flipped: boolean;
  isLamp: boolean;
  minutesUntilReady: number;
  boundingBox: BoundingBox;
  scale: ScaleElement;
  uses: number;
  destroyOvernight: boolean;
  displayNameOverrideTemplate: { string: string };
  descriptionSubstitutionTemplates: DescriptionSubstitutionTemplatesDescriptionSubstitutionTemplates;
  trinketMetadata: TrinketMetadata;
  generationSeed: number;
}

export interface SpecialOrders {
  SpecialOrder: SpecialOrdersSpecialOrder;
}

export interface SpecialOrdersSpecialOrder {
  preSelectedItems: {
    item: {
      key: { string: string };
      value: { string: string };
    };
  };
  selectedRandomElements: {
    item: {
      key: { string: string };
      value: { int: number };
    };
  };
  objectives: Objective;
  generationSeed: number;
  seenParticipantsIDs: ParticipantsIDs;
  participantsIDs: ParticipantsIDs;
  unclaimedRewardsIDs: string;
  appliedSpecialRules: boolean;
  rewards: Reward[];
  questKey: string;
  questName: string;
  questDescription: string;
  requester: string;
  orderType: string;
  specialRule: string;
  readyForRemoval: boolean;
  dueDate: number;
  duration: string;
  questState: string;
}

export interface ParticipantsIDs {
  item: ParticipantsIDsItem;
}

export interface ParticipantsIDsItem {
  key: { long: string };
  value: { boolean: boolean };
}

export interface Farmhands {
  Farmer: Player[];
}
