const iconsList = [
  'AcUnit',
  'AccessAlarm',
  'AccessAlarms',
  'AccessTime',
  'Accessibility',
  'AccessibilityNew',
  'Accessible',
  'AccessibleForward',
  'AccountBalance',
  'AccountBalanceWallet',
  'AccountBox',
  'AccountCircle',
  'AccountTree',
  'AdUnits',
  'Adb',
  'Add',
  'AddAPhoto',
  'AddAlarm',
  'AddAlert',
  'AddBox',
  'AddBusiness',
  'AddCircle',
  'AddCircleOutline',
  'AddComment',
  'AddIcCall',
  'AddLocation',
  'AddLocationAlt',
  'AddPhotoAlternate',
  'AddRoad',
  'AddShoppingCart',
  'AddTask',
  'AddToHomeScreen',
  'AddToPhotos',
  'AddToQueue',
  'AddChart',
  'Adjust',
  'AdminPanelSettings',
  'Agriculture',
  'AirlineSeatFlat',
  'AirlineSeatFlatAngled',
  'AirlineSeatIndividualSuite',
  'AirlineSeatLegroomExtra',
  'AirlineSeatLegroomNormal',
  'AirlineSeatLegroomReduced',
  'AirlineSeatReclineExtra',
  'AirlineSeatReclineNormal',
  'AirplanemodeActive',
  'AirplanemodeInactive',
  'Airplay',
  'AirportShuttle',
  'Alarm',
  'AlarmAdd',
  'AlarmOff',
  'AlarmOn',
  'Album',
  'AllInbox',
  'AllInclusive',
  'AllOut',
  'AltRoute',
  'AlternateEmail',
  'AmpStories',
  'Analytics',
  'Anchor',
  'Android',
  'Announcement',
  'Apartment',
  'Api',
  'AppBlocking',
  'AppSettingsAlt',
  'Apps',
  'Architecture',
  'Archive',
  'ArrowBack',
  'ArrowBackIos',
  'ArrowCircleDown',
  'ArrowCircleUp',
  'ArrowDownward',
  'ArrowDropDown',
  'ArrowDropDownCircle',
  'ArrowDropUp',
  'ArrowForward',
  'ArrowForwardIos',
  'ArrowLeft',
  'ArrowRight',
  'ArrowRightAlt',
  'ArrowUpward',
  'ArtTrack',
  'Article',
  'AspectRatio',
  'Assessment',
  'Assignment',
  'AssignmentInd',
  'AssignmentLate',
  'AssignmentReturn',
  'AssignmentReturned',
  'AssignmentTurnedIn',
  'Assistant',
  'AssistantPhoto',
  'Atm',
  'AttachEmail',
  'AttachFile',
  'AttachMoney',
  'Attachment',
  'Audiotrack',
  'AutoDelete',
  'Autorenew',
  'AvTimer',
  'BabyChangingStation',
  'Backpack',
  'Backspace',
  'Backup',
  'BackupTable',
  'Badge',
  'Ballot',
  'BarChart',
  'BatchPrediction',
  'Bathtub',
  'BatteryAlert',
  'BatteryChargingFull',
  'BatteryFull',
  'BatteryStd',
  'BatteryUnknown',
  'BeachAccess',
  'Bedtime',
  'Beenhere',
  'Bento',
  'BikeScooter',
  'Biotech',
  'Block',
  'Bluetooth',
  'BluetoothAudio',
  'BluetoothConnected',
  'BluetoothDisabled',
  'BluetoothSearching',
  'BlurCircular',
  'BlurLinear',
  'BlurOff',
  'BlurOn',
  'Book',
  'BookOnline',
  'Bookmark',
  'BookmarkBorder',
  'Bookmarks',
  'BorderAll',
  'BorderBottom',
  'BorderClear',
  'BorderHorizontal',
  'BorderInner',
  'BorderLeft',
  'BorderOuter',
  'BorderRight',
  'BorderStyle',
  'BorderTop',
  'BorderVertical',
  'BrandingWatermark',
  'Brightness1',
  'Brightness2',
  'Brightness3',
  'Brightness4',
  'Brightness5',
  'Brightness6',
  'Brightness7',
  'BrightnessAuto',
  'BrightnessHigh',
  'BrightnessLow',
  'BrightnessMedium',
  'BrokenImage',
  'BrowserNotSupported',
  'Brush',
  'BubbleChart',
  'BugReport',
  'Build',
  'BuildCircle',
  'BurstMode',
  'Business',
  'BusinessCenter',
  'Cached',
  'Cake',
  'Calculate',
  'CalendarToday',
  'CalendarViewDay',
  'Call',
  'CallEnd',
  'CallMade',
  'CallMerge',
  'CallMissed',
  'CallMissedOutgoing',
  'CallReceived',
  'CallSplit',
  'CallToAction',
  'Camera',
  'CameraAlt',
  'CameraEnhance',
  'CameraFront',
  'CameraRear',
  'CameraRoll',
  'Campaign',
  'Cancel',
  'CancelPresentation',
  'CancelScheduleSend',
  'CardGiftcard',
  'CardMembership',
  'CardTravel',
  'Carpenter',
  'Casino',
  'Cast',
  'CastConnected',
  'CastForEducation',
  'Category',
  'CenterFocusStrong',
  'CenterFocusWeak',
  'ChangeHistory',
  'ChargingStation',
  'Chat',
  'ChatBubble',
  'ChatBubbleOutline',
  'Check',
  'CheckBox',
  'CheckBoxOutlineBlank',
  'CheckCircle',
  'CheckCircleOutline',
  'Checkroom',
  'ChevronLeft',
  'ChevronRight',
  'ChildCare',
  'ChildFriendly',
  'ChromeReaderMode',
  'Circle',
  'Class',
  'CleanHands',
  'CleaningServices',
  'Clear',
  'ClearAll',
  'Close',
  'CloseFullscreen',
  'ClosedCaption',
  'ClosedCaptionDisabled',
  'Cloud',
  'CloudCircle',
  'CloudDone',
  'CloudDownload',
  'CloudOff',
  'CloudQueue',
  'CloudUpload',
  'Code',
  'Collections',
  'CollectionsBookmark',
  'ColorLens',
  'Colorize',
  'Comment',
  'CommentBank',
  'Commute',
  'Compare',
  'CompareArrows',
  'CompassCalibration',
  'Computer',
  'ConfirmationNumber',
  'ConnectWithoutContact',
  'Construction',
  'ContactMail',
  'ContactPage',
  'ContactPhone',
  'ContactSupport',
  'Contactless',
  'Contacts',
  'ContentCopy',
  'ContentCut',
  'ContentPaste',
  'ControlCamera',
  'ControlPoint',
  'ControlPointDuplicate',
  'Copyright',
  'Coronavirus',
  'CorporateFare',
  'Countertops',
  'Create',
  'CreateNewFolder',
  'CreditCard',
  'Crop',
  'Crop169',
  'Crop32',
  'Crop54',
  'Crop75',
  'CropDin',
  'CropFree',
  'CropLandscape',
  'CropOriginal',
  'CropPortrait',
  'CropRotate',
  'CropSquare',
  'DarkMode',
  'Dashboard',
  'DataUsage',
  'DateRange',
  'Deck',
  'Dehaze',
  'Delete',
  'DeleteForever',
  'DeleteOutline',
  'DeleteSweep',
  'DepartureBoard',
  'Description',
  'DesignServices',
  'DesktopAccessDisabled',
  'DesktopMac',
  'DesktopWindows',
  'Details',
  'DeveloperBoard',
  'DeveloperMode',
  'DeviceHub',
  'DeviceUnknown',
  'Devices',
  'DevicesOther',
  'DialerSip',
  'Dialpad',
  'Directions',
  'DirectionsBike',
  'DirectionsBoat',
  'DirectionsBus',
  'DirectionsCar',
  'DirectionsOff',
  'DirectionsRailway',
  'DirectionsRun',
  'DirectionsSubway',
  'DirectionsTransit',
  'DirectionsWalk',
  'DisabledByDefault',
  'DiscFull',
  'Dns',
  'DoNotStep',
  'DoNotTouch',
  'Dock',
  'Domain',
  'DomainDisabled',
  'DomainVerification',
  'Done',
  'DoneAll',
  'DoneOutline',
  'DonutLarge',
  'DonutSmall',
  'DoubleArrow',
  'Drafts',
  'DragHandle',
  'DragIndicator',
  'DriveEta',
  'Dry',
  'Duo',
  'Dvr',
  'DynamicFeed',
  'DynamicForm',
  'East',
  'Eco',
  'Edit',
  'EditAttributes',
  'EditLocation',
  'EditRoad',
  'Eject',
  'Elderly',
  'ElectricBike',
  'ElectricCar',
  'ElectricMoped',
  'ElectricScooter',
  'ElectricalServices',
  'Elevator',
  'Email',
  'EmojiEmotions',
  'EmojiEvents',
  'EmojiFlags',
  'EmojiFoodBeverage',
  'EmojiNature',
  'EmojiObjects',
  'EmojiPeople',
  'EmojiSymbols',
  'EmojiTransportation',
  'Engineering',
  'EnhancedEncryption',
  'Equalizer',
  'Error',
  'ErrorOutline',
  'Escalator',
  'EscalatorWarning',
  'Euro',
  'EuroSymbol',
  'EvStation',
  'Event',
  'EventAvailable',
  'EventBusy',
  'EventNote',
  'EventSeat',
  'ExitToApp',
  'ExpandLess',
  'ExpandMore',
  'Explicit',
  'Explore',
  'ExploreOff',
  'Exposure',
  'ExposureNeg1',
  'ExposureNeg2',
  'ExposurePlus1',
  'ExposurePlus2',
  'ExposureZero',
  'Extension',
  'Face',
  // 'Facebook',
  'FactCheck',
  'FamilyRestroom',
  'FastForward',
  'FastRewind',
  'Fastfood',
  'Favorite',
  'FavoriteBorder',
  'FeaturedPlayList',
  'FeaturedVideo',
  'Feedback',
  'Fence',
  'FiberDvr',
  'FiberManualRecord',
  'FiberNew',
  'FiberPin',
  'FiberSmartRecord',
  'FileCopy',
  'Filter',
  'Filter1',
  'Filter2',
  'Filter3',
  'Filter4',
  'Filter5',
  'Filter6',
  'Filter7',
  'Filter8',
  'Filter9',
  'Filter9Plus',
  'FilterAlt',
  'FilterBAndW',
  'FilterCenterFocus',
  'FilterDrama',
  'FilterFrames',
  'FilterHdr',
  'FilterList',
  'FilterNone',
  'FilterTiltShift',
  'FilterVintage',
  'FindInPage',
  'FindReplace',
  'Fingerprint',
  'FireExtinguisher',
  'Fireplace',
  'FirstPage',
  'FitnessCenter',
  'FiveG',
  'Flag',
  'Flaky',
  'Flare',
  'FlashAuto',
  'FlashOff',
  'FlashOn',
  'Flight',
  'FlightLand',
  'FlightTakeoff',
  'Flip',
  'FlipCameraAndroid',
  'FlipCameraIos',
  'FlipToBack',
  'FlipToFront',
  'Folder',
  'FolderOpen',
  'FolderShared',
  'FolderSpecial',
  'FollowTheSigns',
  'FontDownload',
  'FoodBank',
  'FormatAlignCenter',
  'FormatAlignJustify',
  'FormatAlignLeft',
  'FormatAlignRight',
  'FormatBold',
  'FormatClear',
  'FormatColorReset',
  'FormatIndentDecrease',
  'FormatIndentIncrease',
  'FormatItalic',
  'FormatLineSpacing',
  'FormatListBulleted',
  'FormatListNumbered',
  'FormatListNumberedRtl',
  'FormatPaint',
  'FormatQuote',
  'FormatShapes',
  'FormatSize',
  'FormatStrikethrough',
  'FormatTextdirectionLToR',
  'FormatTextdirectionRToL',
  'FormatUnderlined',
  'Forum',
  'Forward',
  'ForwardToInbox',
  'Foundation',
  'FourK',
  'FreeBreakfast',
  'Fullscreen',
  'FullscreenExit',
  'Functions',
  'GTranslate',
  'Gamepad',
  'Games',
  'Gavel',
  'Gesture',
  'GetApp',
  'Gif',
  'GolfCourse',
  'GpsFixed',
  'GpsNotFixed',
  'GpsOff',
  'Grade',
  'Gradient',
  'Grading',
  'Grain',
  'GraphicEq',
  'Grass',
  'GridOff',
  'GridOn',
  'Group',
  'GroupAdd',
  'GroupWork',
  'Groups',
  'Handyman',
  'Hd',
  'HdrOff',
  'HdrOn',
  'HdrStrong',
  'HdrWeak',
  'Headset',
  'HeadsetMic',
  'Healing',
  'Hearing',
  'HearingDisabled',
  'Height',
  'Help',
  'HelpCenter',
  'HelpOutline',
  'HighQuality',
  'Highlight',
  'HighlightAlt',
  'HighlightOff',
  'History',
  'HistoryEdu',
  'HistoryToggleOff',
  'Home',
  'HomeRepairService',
  'HomeWork',
  'HorizontalRule',
  'HorizontalSplit',
  'HotTub',
  'Hotel',
  'HourglassBottom',
  'HourglassDisabled',
  'HourglassEmpty',
  'HourglassFull',
  'HourglassTop',
  'House',
  'HouseSiding',
  'HowToReg',
  'HowToVote',
  'Http',
  'Https',
  'Hvac',
  'Image',
  'ImageAspectRatio',
  'ImageNotSupported',
  'ImageSearch',
  'ImportContacts',
  'ImportExport',
  'ImportantDevices',
  'Inbox',
  'IndeterminateCheckBox',
  'Info',
  'Input',
  'InsertChart',
  'InsertChartOutlined',
  'InsertComment',
  'InsertDriveFile',
  'InsertEmoticon',
  'InsertInvitation',
  'InsertLink',
  'InsertPhoto',
  'Insights',
  'IntegrationInstructions',
  'InvertColors',
  'InvertColorsOff',
  'Iso',
  'Keyboard',
  'KeyboardArrowDown',
  'KeyboardArrowLeft',
  'KeyboardArrowRight',
  'KeyboardArrowUp',
  'KeyboardBackspace',
  'KeyboardCapslock',
  'KeyboardHide',
  'KeyboardReturn',
  'KeyboardTab',
  'KeyboardVoice',
  'KingBed',
  'Kitchen',
  'Label',
  'LabelImportant',
  'LabelOff',
  'Landscape',
  'Language',
  'Laptop',
  'LaptopChromebook',
  'LaptopMac',
  'LaptopWindows',
  'LastPage',
  'Launch',
  'Layers',
  'LayersClear',
  'Leaderboard',
  'LeakAdd',
  'LeakRemove',
  'LegendToggle',
  'Lens',
  'LibraryAdd',
  'LibraryAddCheck',
  'LibraryBooks',
  'LibraryMusic',
  'LightMode',
  'LineStyle',
  'LineWeight',
  'LinearScale',
  'Link',
  'LinkOff',
  'LinkedCamera',
  'List',
  'ListAlt',
  'LiveHelp',
  'LiveTv',
  'LocalActivity',
  'LocalAirport',
  'LocalAtm',
  'LocalBar',
  'LocalCafe',
  'LocalCarWash',
  'LocalConvenienceStore',
  'LocalDining',
  'LocalDrink',
  'LocalFireDepartment',
  'LocalFlorist',
  'LocalGasStation',
  'LocalGroceryStore',
  'LocalHospital',
  'LocalHotel',
  'LocalLaundryService',
  'LocalLibrary',
  'LocalMall',
  'LocalMovies',
  'LocalOffer',
  'LocalParking',
  'LocalPharmacy',
  'LocalPhone',
  'LocalPizza',
  'LocalPlay',
  'LocalPolice',
  'LocalPostOffice',
  'LocalPrintshop',
  'LocalSee',
  'LocalShipping',
  'LocalTaxi',
  'LocationCity',
  'LocationDisabled',
  'LocationOff',
  'LocationOn',
  'LocationSearching',
  'Lock',
  'LockOpen',
  'Login',
  'Looks',
  'Looks3',
  'Looks4',
  'Looks5',
  'Looks6',
  'LooksOne',
  'LooksTwo',
  'Loop',
  'Loupe',
  'LowPriority',
  'Loyalty',
  'Luggage',
  'Mail',
  'MailOutline',
  'Map',
  'MapsUgc',
  'MarkChatRead',
  'MarkChatUnread',
  'MarkEmailRead',
  'MarkEmailUnread',
  'Markunread',
  'MarkunreadMailbox',
  'Masks',
  'Maximize',
  'Mediation',
  'MedicalServices',
  'MeetingRoom',
  'Memory',
  'Menu',
  'MenuBook',
  'MenuOpen',
  'MergeType',
  'Message',
  'Mic',
  'MicNone',
  'MicOff',
  'Microwave',
  'MilitaryTech',
  'Minimize',
  'MiscellaneousServices',
  'MissedVideoCall',
  'Mms',
  'MobileFriendly',
  'MobileOff',
  'MobileScreenShare',
  'ModeComment',
  'ModelTraining',
  'MonetizationOn',
  'Money',
  'MoneyOff',
  'MonochromePhotos',
  'Mood',
  'MoodBad',
  'Moped',
  'More',
  'MoreHoriz',
  'MoreTime',
  'MoreVert',
  'MotionPhotosOn',
  'MotionPhotosPause',
  'MotionPhotosPaused',
  'Mouse',
  'MoveToInbox',
  'Movie',
  'MovieCreation',
  'MovieFilter',
  'MultilineChart',
  'MultipleStop',
  'Museum',
  'MusicNote',
  'MusicOff',
  'MusicVideo',
  'MyLocation',
  'Nat',
  'Nature',
  'NaturePeople',
  'NavigateBefore',
  'NavigateNext',
  'Navigation',
  'NearMe',
  'NearMeDisabled',
  'NetworkCheck',
  'NetworkLocked',
  'NewReleases',
  'NextPlan',
  'NextWeek',
  'Nfc',
  'NightShelter',
  'NightsStay',
  'NoBackpack',
  'NoCell',
  'NoDrinks',
  'NoEncryption',
  'NoFlash',
  'NoFood',
  'NoLuggage',
  'NoMeals',
  'NoMeetingRoom',
  'NoPhotography',
  'NoSim',
  'NoStroller',
  'NoTransfer',
  'North',
  'NorthEast',
  'NorthWest',
  'NotAccessible',
  'NotInterested',
  'NotListedLocation',
  'NotStarted',
  'Note',
  'NoteAdd',
  'Notes',
  'NotificationImportant',
  'Notifications',
  'NotificationsActive',
  'NotificationsNone',
  'NotificationsOff',
  'NotificationsPaused',
  'OfflineBolt',
  'OfflinePin',
  'OndemandVideo',
  'OnlinePrediction',
  'Opacity',
  'OpenInBrowser',
  'OpenInFull',
  'OpenInNew',
  'OpenWith',
  'Outbound',
  'OutdoorGrill',
  'Outlet',
  'OutlinedFlag',
  'Pages',
  'Pageview',
  'Palette',
  'PanTool',
  'Panorama',
  'PanoramaFishEye',
  'PanoramaHorizontal',
  'PanoramaVertical',
  'PanoramaWideAngle',
  'PartyMode',
  'Pause',
  'PauseCircleFilled',
  'PauseCircleOutline',
  'PausePresentation',
  'Payment',
  'Payments',
  'PedalBike',
  'Pending',
  'PendingActions',
  'People',
  'PeopleAlt',
  'PeopleOutline',
  'PermCameraMic',
  'PermContactCalendar',
  'PermDataSetting',
  'PermDeviceInformation',
  'PermIdentity',
  'PermMedia',
  'PermPhoneMsg',
  'PermScanWifi',
  'Person',
  'PersonAdd',
  'PersonAddAlt1',
  'PersonAddDisabled',
  'PersonOutline',
  'PersonPin',
  'PersonPinCircle',
  'PersonRemove',
  'PersonRemoveAlt1',
  'PersonSearch',
  'PersonalVideo',
  'PestControl',
  'PestControlRodent',
  'Pets',
  'Phone',
  'PhoneAndroid',
  'PhoneBluetoothSpeaker',
  'PhoneCallback',
  'PhoneDisabled',
  'PhoneEnabled',
  'PhoneForwarded',
  'PhoneInTalk',
  'PhoneIphone',
  'PhoneLocked',
  'PhoneMissed',
  'PhonePaused',
  'Phonelink',
  'PhonelinkErase',
  'PhonelinkLock',
  'PhonelinkOff',
  'PhonelinkRing',
  'PhonelinkSetup',
  'Photo',
  'PhotoAlbum',
  'PhotoCamera',
  'PhotoFilter',
  'PhotoLibrary',
  'PhotoSizeSelectActual',
  'PhotoSizeSelectLarge',
  'PhotoSizeSelectSmall',
  'PictureAsPdf',
  'PictureInPicture',
  'PictureInPictureAlt',
  'PieChart',
  'PinDrop',
  'Place',
  'Plagiarism',
  'PlayArrow',
  'PlayCircleFilled',
  'PlayCircleOutline',
  'PlayForWork',
  'PlaylistAdd',
  'PlaylistAddCheck',
  'PlaylistPlay',
  'Plumbing',
  'PlusOne',
  'PointOfSale',
  'Policy',
  'Poll',
  'Polymer',
  'Pool',
  'PortableWifiOff',
  'Portrait',
  'PostAdd',
  'Power',
  'PowerInput',
  'PowerOff',
  'PowerSettingsNew',
  'PregnantWoman',
  'PresentToAll',
  'Preview',
  'Print',
  'PrintDisabled',
  'PriorityHigh',
  'PrivacyTip',
  'Psychology',
  'Public',
  'PublicOff',
  'Publish',
  'PublishedWithChanges',
  'PushPin',
  'QrCode',
  'QrCodeScanner',
  'QueryBuilder',
  'QuestionAnswer',
  'Queue',
  'QueueMusic',
  'QueuePlayNext',
  'Quickreply',
  'Radio',
  'RadioButtonChecked',
  'RadioButtonUnchecked',
  'RateReview',
  'ReadMore',
  'Receipt',
  'ReceiptLong',
  'RecentActors',
  'RecordVoiceOver',
  'Redeem',
  'Redo',
  'ReduceCapacity',
  'Refresh',
  'Remove',
  'RemoveCircle',
  'RemoveCircleOutline',
  'RemoveFromQueue',
  'RemoveRedEye',
  'RemoveShoppingCart',
  'Reorder',
  'Repeat',
  'RepeatOne',
  'Replay',
  'Reply',
  'ReplyAll',
  'Report',
  'ReportOff',
  'ReportProblem',
  'RequestPage',
  'RequestQuote',
  'Restaurant',
  'RestaurantMenu',
  'Restore',
  'RestoreFromTrash',
  'RestorePage',
  'RiceBowl',
  'RingVolume',
  'Roofing',
  'Room',
  'RoomPreferences',
  'RoomService',
  'Rotate90DegreesCcw',
  'RotateLeft',
  'RotateRight',
  'RoundedCorner',
  'Router',
  'Rowing',
  'RssFeed',
  'Rule',
  'RuleFolder',
  'RunCircle',
  'RvHookup',
  'Sanitizer',
  'Satellite',
  'Save',
  'SaveAlt',
  'Scanner',
  'ScatterPlot',
  'Schedule',
  'School',
  'Science',
  'Score',
  'ScreenLockLandscape',
  'ScreenLockPortrait',
  'ScreenLockRotation',
  'ScreenRotation',
  'ScreenShare',
  'SdCard',
  'SdStorage',
  'Search',
  'SearchOff',
  'Security',
  'SelectAll',
  'SelfImprovement',
  'Send',
  'SensorDoor',
  'SensorWindow',
  'SentimentDissatisfied',
  'SentimentSatisfied',
  'SentimentSatisfiedAlt',
  'SentimentVeryDissatisfied',
  'SentimentVerySatisfied',
  'SetMeal',
  'Settings',
  'SettingsApplications',
  'SettingsBackupRestore',
  'SettingsBluetooth',
  'SettingsBrightness',
  'SettingsCell',
  'SettingsEthernet',
  'SettingsInputAntenna',
  'SettingsInputComponent',
  'SettingsInputComposite',
  'SettingsInputHdmi',
  'SettingsInputSvideo',
  'SettingsOverscan',
  'SettingsPhone',
  'SettingsPower',
  'SettingsRemote',
  'SettingsSystemDaydream',
  'SettingsVoice',
  'Share',
  'Shop',
  'ShopTwo',
  'ShoppingBag',
  'ShoppingBasket',
  'ShoppingCart',
  'ShortText',
  'ShowChart',
  'Shuffle',
  'ShutterSpeed',
  'Sick',
  'SignalCellular4Bar',
  'SignalCellularAlt',
  'SignalCellularConnectedNoInternet4Bar',
  'SignalCellularNoSim',
  'SignalCellularNull',
  'SignalCellularOff',
  'SignalWifi4Bar',
  'SignalWifi4BarLock',
  'SignalWifiOff',
  'SimCard',
  'SingleBed',
  'SixFtApart',
  'SkipNext',
  'SkipPrevious',
  'Slideshow',
  'SlowMotionVideo',
  'SmartButton',
  'Smartphone',
  'SmokeFree',
  'SmokingRooms',
  'Sms',
  'SmsFailed',
  'SnippetFolder',
  'Snooze',
  'Soap',
  'Sort',
  'SortByAlpha',
  'Source',
  'South',
  'SouthEast',
  'SouthWest',
  'Spa',
  'SpaceBar',
  'Speaker',
  'SpeakerGroup',
  'SpeakerNotes',
  'SpeakerNotesOff',
  'SpeakerPhone',
  'Speed',
  'Spellcheck',
  'Sports',
  'SportsBar',
  'SportsBaseball',
  'SportsBasketball',
  'SportsCricket',
  'SportsEsports',
  'SportsFootball',
  'SportsGolf',
  'SportsHandball',
  'SportsHockey',
  'SportsKabaddi',
  'SportsMma',
  'SportsMotorsports',
  'SportsRugby',
  'SportsSoccer',
  'SportsTennis',
  'SportsVolleyball',
  'SquareFoot',
  'StackedLineChart',
  'Stairs',
  'Star',
  'StarBorder',
  'StarHalf',
  'StarOutline',
  'StarRate',
  'Stars',
  'StayCurrentLandscape',
  'StayCurrentPortrait',
  'StayPrimaryLandscape',
  'StayPrimaryPortrait',
  'StickyNote2',
  'Stop',
  'StopCircle',
  'StopScreenShare',
  'Storage',
  'Store',
  'StoreMallDirectory',
  'Storefront',
  'Straighten',
  'Streetview',
  'StrikethroughS',
  'Stroller',
  'Style',
  'SubdirectoryArrowLeft',
  'SubdirectoryArrowRight',
  'Subject',
  'Subscript',
  'Subscriptions',
  'Subtitles',
  'SubtitlesOff',
  'Subway',
  'Superscript',
  'SupervisedUserCircle',
  'SupervisorAccount',
  'Support',
  'SupportAgent',
  'SurroundSound',
  'SwapCalls',
  'SwapHoriz',
  'SwapHorizontalCircle',
  'SwapVert',
  'SwapVerticalCircle',
  'SwitchCamera',
  'SwitchLeft',
  'SwitchRight',
  'SwitchVideo',
  'Sync',
  'SyncAlt',
  'SyncDisabled',
  'SyncProblem',
  'SystemUpdate',
  'SystemUpdateAlt',
  'Tab',
  'TabUnselected',
  'TableChart',
  'TableRows',
  'TableView',
  'Tablet',
  'TabletAndroid',
  'TabletMac',
  'TagFaces',
  'TapAndPlay',
  'Tapas',
  'Terrain',
  'TextFields',
  'TextFormat',
  'TextRotateUp',
  'TextRotateVertical',
  'TextRotationAngledown',
  'TextRotationAngleup',
  'TextRotationDown',
  'TextRotationNone',
  'TextSnippet',
  'Textsms',
  'Texture',
  'Theaters',
  'ThreeDRotation',
  'ThreeHundredSixty',
  'ThumbDown',
  'ThumbDownAlt',
  'ThumbUp',
  'ThumbUpAlt',
  'ThumbsUpDown',
  'TimeToLeave',
  'Timelapse',
  'Timeline',
  'Timer',
  'Timer10',
  'Timer3',
  'TimerOff',
  'Title',
  'Toc',
  'Today',
  'ToggleOff',
  'ToggleOn',
  'Toll',
  'Tonality',
  'Topic',
  'TouchApp',
  'Tour',
  'Toys',
  'TrackChanges',
  'Traffic',
  'Train',
  'Tram',
  'TransferWithinAStation',
  'Transform',
  'TransitEnterexit',
  'Translate',
  'TrendingDown',
  'TrendingFlat',
  'TrendingUp',
  'TripOrigin',
  'Tty',
  'Tune',
  'TurnedIn',
  'TurnedInNot',
  'Tv',
  'TvOff',
  'TwoWheeler',
  'Umbrella',
  'Unarchive',
  'Undo',
  'UnfoldLess',
  'UnfoldMore',
  'Unpublished',
  'Unsubscribe',
  'Update',
  'Upgrade',
  'Usb',
  'Verified',
  'VerifiedUser',
  'VerticalAlignBottom',
  'VerticalAlignCenter',
  'VerticalAlignTop',
  'VerticalSplit',
  'Vibration',
  'VideoCall',
  'VideoLabel',
  'VideoLibrary',
  'VideoSettings',
  'Videocam',
  'VideocamOff',
  'VideogameAsset',
  'ViewAgenda',
  'ViewArray',
  'ViewCarousel',
  'ViewColumn',
  'ViewComfy',
  'ViewCompact',
  'ViewDay',
  'ViewHeadline',
  'ViewList',
  'ViewModule',
  'ViewQuilt',
  'ViewSidebar',
  'ViewStream',
  'ViewWeek',
  'Vignette',
  'Visibility',
  'VisibilityOff',
  'VoiceChat',
  'VoiceOverOff',
  'Voicemail',
  'VolumeDown',
  'VolumeMute',
  'VolumeOff',
  'VolumeUp',
  'VpnKey',
  'VpnLock',
  'Wallpaper',
  'Warning',
  'Wash',
  'Watch',
  'WatchLater',
  'WaterDamage',
  'Waves',
  'WbAuto',
  'WbCloudy',
  'WbIncandescent',
  'WbIridescent',
  'WbSunny',
  'Wc',
  'Web',
  'WebAsset',
  'Weekend',
  'West',
  'Whatshot',
  'WheelchairPickup',
  'WhereToVote',
  'Widgets',
  'Wifi',
  'WifiCalling',
  'WifiLock',
  'WifiOff',
  'WifiProtectedSetup',
  'WifiTethering',
  'WineBar',
  'Work',
  'WorkOff',
  'WorkOutline',
  'WrapText',
  'WrongLocation',
  'Wysiwyg',
  'YoutubeSearchedFor',
  'ZoomIn',
  'ZoomOut',
  'ZoomOutMap',
];

module.exports = iconsList;
