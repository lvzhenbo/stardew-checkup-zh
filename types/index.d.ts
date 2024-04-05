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
  broadcastedMail: AcceptedSpecialOrderTypes;
  worldStateIDs: AcceptedSpecialOrderTypes;
  lostBooksFound: number;
  goldenWalnuts: number;
  goldenWalnutsFound: number;
  miniShippingBinsObtained: number;
  mineShrineActivated: boolean;
  skullShrineActivated: boolean;
  goldenCoconutCracked: boolean;
  parrotPlatformsUnlocked: boolean;
  farmPerfect: boolean;
  foundBuriedNuts: AcceptedSpecialOrderTypes;
  checkedGarbage: string;
  visitsUntilY1Guarantee: number;
  shuffleMineChests: string;
  dayOfMonth: number;
  year: number;
  countdownToWedding: string;
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
  bundleData: Data;
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
  completedSpecialOrders: AcceptedSpecialOrderTypes;
  acceptedSpecialOrderTypes: AcceptedSpecialOrderTypes;
  returnedDonations: string;
  globalInventories: string;
  collectedNutTracker: AcceptedSpecialOrderTypes;
  farmerFriendships: string;
  cellarAssignments: CellarAssignments;
  timesFedRaccoons: number;
  treasureTotemsUsed: number;
  perfectionWaivers: number;
  seasonOfCurrentRaccoonBundle: number;
  raccoonBundles: RaccoonBundles;
  activatedGoldenParrot: boolean;
  daysPlayedWhenLastRaccoonBundleWasFinished: number;
  lastAppliedSaveFix: number;
  gameVersion: string;
  gameVersionLabel?: string;
}

export interface AcceptedSpecialOrderTypes {
  string: string[];
}

export interface AvailableSpecialOrders {
  SpecialOrder: SpecialOrderElement[];
}

export interface SpecialOrderElement {
  preSelectedItems: PreSelectedItemsClass | string;
  selectedRandomElements: TailoredItems | string;
  objectives: Objective[] | ObjectivesClass;
  generationSeed: number;
  seenParticipantsIDs: string;
  participantsIDs: string;
  unclaimedRewardsIDs: string;
  appliedSpecialRules: boolean;
  rewards: Reward[] | RewardsClass;
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
  skullCave?: SleptInTemporaryBed;
}

export interface SleptInTemporaryBed {
  boolean: boolean;
}

export interface PreSelectedItemsClass {
  item: PreSelectedItemsItem;
}

export interface PreSelectedItemsItem {
  key: StringObject;
  value: StringObject;
}

interface StringObject {
  string: string;
}

export interface Reward {
  amount?: MaxEntries;
  multiplier?: MultiplierClass;
  noLetter?: SleptInTemporaryBed;
  grantedMails?: StringObject;
  host?: SleptInTemporaryBed;
}

export interface MaxEntries {
  int: number;
}

export interface MultiplierClass {
  float: number;
}

export interface RewardsClass {
  amount: MaxEntries;
}

export interface TailoredItems {
  item: TailoredItemsItem;
}

export interface TailoredItemsItem {
  key: StringObject;
  value: MaxEntries;
}

export interface Data {
  item: PreSelectedItemsItem[];
}

export interface CellarAssignments {
  item: CellarAssignmentsItem;
}

export interface CellarAssignmentsItem {
  key: MaxEntries;
  value: KeyClass;
}

export interface KeyClass {
  long: string;
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
  entries: Entries;
  maxEntries: MaxEntries;
}

export interface Entries {
  NetLeaderboardsEntry: NetLeaderboardsEntry[];
}

export interface NetLeaderboardsEntry {
  name: StringObject;
  score: MaxEntries;
}

export interface LimitedNutDrops {
  item: TailoredItemsItem[];
}

export interface LocationWeather {
  item: LocationWeatherItem[];
}

export interface LocationWeatherItem {
  key: StringObject;
  value: PurpleValue;
}

export interface PurpleValue {
  LocationWeather: LocationWeatherClass;
}

export interface LocationWeatherClass {
  weatherForTomorrow: StringObject;
  weather: StringObject;
  isRaining: SleptInTemporaryBed;
  isSnowing: SleptInTemporaryBed;
  isLightning: SleptInTemporaryBed;
  isDebrisWeather: SleptInTemporaryBed;
  isGreenRain: SleptInTemporaryBed;
  monthlyNonRainyDayCount: MaxEntries;
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
  Animals: GameLocationAnimals;
  IsGreenhouse: boolean;
  housePaintColor?: HousePaintColor;
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
  areasComplete?: RaccoonBundles;
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
  bananaShrineComplete?: SleptInTemporaryBed;
  bananaShrineNutAwarded?: SleptInTemporaryBed;
  sandDuggy?: SandDuggy;
  farmhouseRestored?: boolean;
  farmhouseStringObject?: boolean;
  farmObelisk?: boolean;
  shippingBinPosition?: ScaleElement;
  traderActivated?: boolean;
  caveOpened?: boolean;
  treeNutShot?: boolean;
  treeNutObtained?: SleptInTemporaryBed;
  firstParrotDone?: boolean;
  completed?: boolean;
  piecesDonated?: boolean[];
  centerSkeletonRestored?: boolean;
  snakeRestored?: boolean;
  batRestored?: boolean;
  frogRestored?: boolean;
  plantsRestoredLeft?: boolean;
  plantsRestoredRight?: boolean;
  hasFailedSurveyToday?: SleptInTemporaryBed;
  visited?: boolean | SleptInTemporaryBed;
  puzzleFinished?: boolean;
  gourmandRequestsFulfilled?: number;
  raceTrack?: RaceTrack;
}

export interface GameLocationAnimals {
  SerializableDictionaryOfInt64FarmAnimal: string;
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
  scale: MultiplierClass;
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
  hasBeenKissedToday: SleptInTemporaryBed;
  shouldPlayRobinHammerAnimation: SleptInTemporaryBed;
  shouldPlaySpousePatioAnimation: SleptInTemporaryBed;
  shouldWearIslandAttire: SleptInTemporaryBed;
  isMovingOnPathFindPath: SleptInTemporaryBed;
  endOfRouteBehaviorName: StringObject;
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
  SerializableDictionaryOfStringString: PurpleSerializableDictionaryOfStringString;
}

export interface PurpleSerializableDictionaryOfStringString {
  item: PurpleItem[];
}

export interface PurpleItem {
  key: StringObject;
  value: PurpleKey;
}

export interface PurpleKey {
  string: number;
}

export interface AppliedWallpaper {
  SerializableDictionaryOfStringString: AppliedWallpaperSerializableDictionaryOfStringString;
}

export interface AppliedWallpaperSerializableDictionaryOfStringString {
  item: FluffyItem[];
}

export interface FluffyItem {
  key: StringObject;
  value: FluffyKey;
}

export interface FluffyKey {
  string: number | string;
}

export interface RaccoonBundles {
  boolean: boolean[];
}

export interface BuildingsClass {
  Building: Building[];
}

export interface Building {
  id: string;
  skinId: StringObject;
  nonInstancedIndoorsName: StringObject;
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
  fishType?: MaxEntries;
  lastUnlockedPopulationGate?: MaxEntries;
  hasCompletedRequest?: SleptInTemporaryBed;
  goldenAnimalCracker?: SleptInTemporaryBed;
  sign?: Sign;
  overrideWaterColor?: OverrideWaterColor;
  output?: Output;
  neededItem?: NeededItem;
  neededItemCount?: MaxEntries;
  daysSinceSpawn?: MaxEntries;
  nettingStyle?: MaxEntries;
  seedOffset?: MaxEntries;
  hasSpawnedFish?: SleptInTemporaryBed;
  input?: Input;
  watered?: boolean;
  petGuid?: string;
  HorseId?: string;
  cropHarvestRadius?: number;
  noHarvest?: boolean;
  wasLit?: boolean;
  raisinDays?: MaxEntries;
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
  lidFrameCount: MaxEntries;
  frameCounter: number;
  items: NeededItem | string;
  separateWalletItems: SeparateWalletItems;
  tint: Color;
  playerChoiceColor: Color;
  playerChest: boolean;
  fridge: boolean;
  giftbox: boolean;
  giftboxIndex: number;
  giftboxIsStarterGift: SleptInTemporaryBed;
  spriteIndexOverride: number;
  dropContents: boolean;
  synchronized: boolean;
  specialChestType: SpecialChestType;
  globalInventoryId: StringObject;
}

export interface NeededItem {
  Item: string;
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
  lidFrameCount?: MaxEntries;
  frameCounter?: number;
  items?: string;
  separateWalletItems?: SeparateWalletItems;
  tint?: Color;
  playerChoiceColor?: Color;
  playerChest?: boolean;
  fridge?: boolean;
  giftbox?: boolean;
  giftboxIndex?: number;
  giftboxIsStarterGift?: SleptInTemporaryBed;
  spriteIndexOverride?: number;
  dropContents?: boolean;
  synchronized?: boolean;
  specialChestType?: SpecialChestType;
  globalInventoryId?: StringObject;
  Item?: DishOfTheDay;
  questId?: number;
  preservedParentSheetIndex?: number;
}

export interface BuildingPaintColor {
  ColorName: StringObject;
  Color1Default: SleptInTemporaryBed;
  Color1Hue: MaxEntries;
  Color1Saturation: MaxEntries;
  Color1Lightness: MaxEntries;
  Color2Default: SleptInTemporaryBed;
  Color2Hue: MaxEntries;
  Color2Saturation: MaxEntries;
  Color2Lightness: MaxEntries;
  Color3Default: SleptInTemporaryBed;
  Color3Hue: MaxEntries;
  Color3Saturation: MaxEntries;
  Color3Lightness: MaxEntries;
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
  animalsThatLiveHere?: AnimalsThatLiveHere;
  wallPaper?: string;
  appliedWallpaper?: TrinketMetadata;
  floor?: string;
  appliedFloor?: IndoorsAppliedFloor;
  slimeMatingsLeft?: number;
  waterSpots?: RaccoonBundles;
}

export interface IndoorsAnimals {
  SerializableDictionaryOfInt64FarmAnimal: AnimalsClass | string;
}

export interface AnimalsClass {
  item: AnimalsItem[];
}

export interface AnimalsItem {
  key: KeyClass;
  value: FluffyValue;
}

export interface FluffyValue {
  FarmAnimal: FarmAnimal;
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
  scale: MultiplierClass;
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
  isSwimming: SleptInTemporaryBed;
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

export interface AnimalsThatLiveHere {
  long: string[];
}

export interface IndoorsAppliedFloor {
  SerializableDictionaryOfStringString: FluffySerializableDictionaryOfStringString;
}

export interface FluffySerializableDictionaryOfStringString {
  item: PurpleItem;
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
  scale: MultiplierClass;
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
  hasBeenKissedToday: SleptInTemporaryBed;
  shouldPlayRobinHammerAnimation: SleptInTemporaryBed;
  shouldPlaySpousePatioAnimation: SleptInTemporaryBed;
  shouldWearIslandAttire: SleptInTemporaryBed;
  isMovingOnPathFindPath: SleptInTemporaryBed;
  endOfRouteBehaviorName: StringObject;
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
  objectsToDrop: ObjectsToDropClass | string;
  stunTime: MaxEntries;
  initializedForLocation: boolean;
  ignoreDamageLOS: boolean;
  isHardModeMonster: boolean;
  stackedSlimes: MaxEntries;
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
  prismatic: SleptInTemporaryBed;
}

export enum Name {
  FrostJelly = 'Frost Jelly',
  GreenSlime = 'Green Slime',
  Sludge = 'Sludge',
  TigerSlime = 'Tiger Slime',
}

export interface ObjectsToDropClass {
  int: number[] | number;
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
  lidFrameCount: MaxEntries;
  frameCounter: number;
  items: PurpleItems | string;
  separateWalletItems: SeparateWalletItems;
  tint: Color;
  playerChoiceColor: Color;
  playerChest: boolean;
  fridge: boolean;
  giftbox: boolean;
  giftboxIndex: number;
  giftboxIsStarterGift: SleptInTemporaryBed;
  spriteIndexOverride: number;
  dropContents: boolean;
  synchronized: boolean;
  specialChestType: SpecialChestType;
  globalInventoryId: StringObject;
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
  lidFrameCount: MaxEntries;
  frameCounter: number;
  items: InputItems;
  separateWalletItems: SeparateWalletItems;
  tint: Color;
  playerChoiceColor: Color;
  playerChest: boolean;
  fridge: boolean;
  giftbox: boolean;
  giftboxIndex: number;
  giftboxIsStarterGift: SleptInTemporaryBed;
  spriteIndexOverride: number;
  dropContents: boolean;
  synchronized: boolean;
  specialChestType: SpecialChestType;
  globalInventoryId: StringObject;
}

export interface InputItems {
  Item: string[];
}

export interface OverrideWaterColor {
  Color: Color;
}

export interface Sign {
  Object: string;
}

export interface ChestConsumedLevels {
  item: ChestConsumedLevelsItem[];
}

export interface ChestConsumedLevelsItem {
  key: MaxEntries;
  value: SleptInTemporaryBed;
}

export interface Bundles {
  item: BundlesItem[];
}

export interface BundlesItem {
  key: MaxEntries;
  value: StickyValue;
}

export interface StickyValue {
  ArrayOfBoolean: RaccoonBundles;
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
  scale: MultiplierClass;
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
  hasBeenKissedToday: SleptInTemporaryBed;
  shouldPlayRobinHammerAnimation: SleptInTemporaryBed;
  shouldPlaySpousePatioAnimation: SleptInTemporaryBed;
  shouldWearIslandAttire: SleptInTemporaryBed;
  isMovingOnPathFindPath: SleptInTemporaryBed;
  endOfRouteBehaviorName: StringObject;
  previousEndPoint: ScaleElement;
  squareMovementFacingPreference: number;
  DefaultFacingDirection: number;
  DefaultPosition: ScaleElement;
  IsWalkingInSquare: boolean;
  IsWalkingTowardPlayer: boolean;
  ownerId?: KeyClass;
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
  objectsToDrop?: Achievements;
  stunTime?: MaxEntries;
  initializedForLocation?: boolean;
  ignoreDamageLOS?: boolean;
  isHardModeMonster?: boolean;
  guid?: string;
  petType?: string;
  whichBreed?: number;
  homeLocationName?: string;
  lastPetDay?: LastPetDay;
  grantedFriendshipForPet?: boolean;
  friendshipTowardFarmer?: number;
  timesPet?: number;
  isSleepingOnFarmerBed?: SleptInTemporaryBed;
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

export interface LastPetDay {
  item: LastPetDayItem;
}

export interface LastPetDayItem {
  key: KeyClass;
  value: MaxEntries;
}

export interface Achievements {
  int: number[];
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
  scale: MultiplierClass;
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
  hasBeenKissedToday: SleptInTemporaryBed;
  shouldPlayRobinHammerAnimation: SleptInTemporaryBed;
  shouldPlaySpousePatioAnimation: SleptInTemporaryBed;
  shouldWearIslandAttire: SleptInTemporaryBed;
  isMovingOnPathFindPath: SleptInTemporaryBed;
  dayScheduleName?: DayScheduleNameEnum;
  endOfRouteBehaviorName: StringObject;
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
  lidFrameCount: MaxEntries;
  frameCounter: number;
  items: FluffyItems | string;
  separateWalletItems: SeparateWalletItems;
  tint: Color;
  playerChoiceColor: Color;
  playerChest: boolean;
  fridge: boolean;
  giftbox: boolean;
  giftboxIndex: number;
  giftboxIsStarterGift: SleptInTemporaryBed;
  spriteIndexOverride: number;
  dropContents: boolean;
  synchronized: boolean;
  specialChestType: SpecialChestType;
  globalInventoryId: StringObject;
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
  displayNameOverrideTemplate?: StringObject;
  descriptionSubstitutionTemplates?: HeldObjectDescriptionSubstitutionTemplates;
  trinketMetadata?: TrinketMetadata;
  generationSeed?: number;
  color?: Color;
  colorSameIndexAsParentSheetIndex?: boolean;
  ColorSameIndexAsParentSheetIndex?: boolean;
}

export interface HeldObjectDescriptionSubstitutionTemplates {
  string: number[];
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
  topIndex?: MaxEntries;
  middleIndex?: MaxEntries;
  bottomIndex?: MaxEntries;
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
  generationSeed: MaxEntries;
}

export interface HousePaintColor {
  BuildingPaintColor: string;
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
  inPot: SleptInTemporaryBed;
  drawShadow: boolean;
}

export enum MiniJukeboxTrack {
  Empty = '',
  FieldofficeTentMusic = 'fieldofficeTentMusic',
}

export interface MuseumPieces {
  item: MuseumPiecesItem[];
}

export interface MuseumPiecesItem {
  key: TentacledKey;
  value: PurpleKey;
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
  lidFrameCount?: MaxEntries;
  frameCounter?: number;
  items?: TentacledItems | string;
  separateWalletItems?: SeparateWalletItems;
  tint?: Color;
  playerChoiceColor?: Color;
  playerChest?: boolean;
  fridge?: boolean;
  giftbox?: boolean;
  giftboxIndex?: number;
  giftboxIsStarterGift?: SleptInTemporaryBed;
  spriteIndexOverride?: number;
  dropContents?: boolean;
  synchronized?: boolean;
  specialChestType?: SpecialChestType;
  globalInventoryId?: StringObject;
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
  hoeDirt?: HoeDirt;
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

export interface HoeDirt {
  state: number;
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
  generationSeed?: MaxEntries | number;
  bedType?: string;
  hat?: ItemHat;
  shirt?: Pants;
  pants?: Pants;
  boots?: ItemBoots;
  facing?: MaxEntries;
  swappedWithFarmerTonight?: SleptInTemporaryBed;
  displayNameOverrideTemplate?: StringObject;
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
  enchantments?: Enchantment[] | Enchantment;
}

export interface PurpleAttachments {
  Object: string[] | DishOfTheDay | string;
}

export interface ItemBoots {
  Boots: string;
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

export interface Enchantment {
  level: number;
}

export interface ItemHat {
  Hat: string;
}

export interface Pants {
  Clothing: string;
}

export interface ModData {
  item: FluffyItem[] | PreSelectedItemsItem;
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

export interface SandDuggy {
  whacked: boolean;
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
  phaseDays: Achievements | string;
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
  key: MaxEntries;
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
  InputButton: InputButton[];
}

export interface InputButton {
  key: string;
  mouseLeft: boolean;
  mouseRight: boolean;
}

export interface CancelButton {
  InputButton: InputButton;
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
  scale: MultiplierClass;
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
  modData: Data;
  questLog: string;
  professions: Achievements;
  newLevels: string;
  experiencePoints: {
    int: number[];
  };
  items: PlayerItems;
  dialogueQuestionsAnswered: Achievements;
  cookingRecipes: LimitedNutDrops;
  craftingRecipes: LimitedNutDrops;
  activeDialogueEvents: LimitedNutDrops;
  previousActiveDialogueEvents: LimitedNutDrops;
  triggerActionsRun: AcceptedSpecialOrderTypes;
  eventsSeen: {
    int: Array<number | string>;
  };
  secretNotesSeen: Achievements;
  songsHeard: AcceptedSpecialOrderTypes;
  achievements: Achievements;
  specialItems: Achievements;
  specialBigCraftables: Achievements;
  mailReceived: AcceptedSpecialOrderTypes;
  mailForTomorrow: string;
  mailbox: StringObject;
  locationsVisited: AcceptedSpecialOrderTypes;
  timeWentToBed: MaxEntries;
  sleptInTemporaryBed: SleptInTemporaryBed;
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
  hasSkullKey: string;
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
  archaeologyFound: ArchaeologyFound;
  callsReceived: CallsReceived;
  giftedItems: GiftedItems;
  tailoredItems: TailoredItems;
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
  bulletDamage: MaxEntries;
  fireSpeedLevel: MaxEntries;
  ammoLevel: MaxEntries;
  spreadPistol: SleptInTemporaryBed;
  runSpeedLevel: MaxEntries;
  lives: MaxEntries;
  coins: MaxEntries;
  score: MaxEntries;
  died: SleptInTemporaryBed;
  whichRound: MaxEntries;
  whichWave: MaxEntries;
  heldItem: MaxEntries;
  world: MaxEntries;
  waveTimer: MaxEntries;
  monsterChances: MonsterChances;
}

export interface MonsterChances {
  Vector2: ScaleElement[];
}

export interface ArchaeologyFound {
  item: ArchaeologyFoundItem[];
}

export interface ArchaeologyFoundItem {
  key: PurpleKey;
  value: CunningValue;
}

export interface CunningValue {
  ArrayOfInt: Achievements;
}

export interface BasicShipped {
  item: BasicShippedItem[];
}

export interface BasicShippedItem {
  key: FluffyKey;
  value: MaxEntries;
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
  item: CallsReceivedItem;
}

export interface CallsReceivedItem {
  key: PurpleKey;
  value: MaxEntries;
}

export interface FishCaught {
  item: FishCaughtItem[];
}

export interface FishCaughtItem {
  key: StringObject;
  value: CunningValue;
}

export interface FriendshipData {
  item: FriendshipDataItem[];
}

export interface FriendshipDataItem {
  key: StringObject;
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
  key: StringObject;
  value: FriskyValue;
}

export interface FriskyValue {
  dictionary: Dictionary;
}

export interface Dictionary {
  item: BasicShippedItem[] | CallsReceivedItem;
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
  additionalPower?: MaxEntries;
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
  item: CallsReceivedItem[];
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
  specificMonstersKilled: LimitedNutDrops;
  Values: {
    item: {
      key: StringObject;
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
  displayNameOverrideTemplate: StringObject;
  descriptionSubstitutionTemplates: DescriptionSubstitutionTemplatesDescriptionSubstitutionTemplates;
  trinketMetadata: TrinketMetadata;
  generationSeed: number;
}

export interface SpecialOrders {
  SpecialOrder: SpecialOrdersSpecialOrder;
}

export interface SpecialOrdersSpecialOrder {
  preSelectedItems: PreSelectedItemsClass;
  selectedRandomElements: TailoredItems;
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
  key: KeyClass;
  value: SleptInTemporaryBed;
}

export interface Farmhands {
  Farmer: Player[];
}
