import {
  PiBarbell,
  PiChartPie,
  PiChatCircle,
  PiChatTeardrop,
  PiClock,
  PiCurrencyDollar,
  PiDiceSix,
  PiEye,
  PiFire,
  PiFlag,
  PiFlame,
  PiHandHeart,
  PiHandsPraying,
  PiHeart,
  PiHeartBreak,
  PiLightbulb,
  PiLink,
  PiMaskHappy,
  PiMoney,
  PiMoon,
  PiPawPrint,
  PiPercent,
  PiPlant,
  PiProhibit,
  PiPuzzlePiece,
  PiRocket,
  PiScales,
  PiScissors,
  PiSmileyXEyes,
  PiStar,
  PiTranslate,
  PiTrendUp,
  PiUsers,
  PiUsersThree,
  PiWallet,
  PiWarning,
} from 'react-icons/pi'

/**
 * Configuration for card data used in the application.
 * Each object in the array represents a card with specific properties.
 *
 * @typedef {Object} CardConfig
 * @property {string} title - The title of the card.
 * @property {IconType} icon - The icon component from react-icons/pi.
 * @property {string} contentKey - The key used to fetch content for this card.
 * @property {string} colorClass - The Tailwind CSS class for text color.
 * @property {string} color - The color name used for styling.
 * @property {string} bg - The Tailwind CSS class for background color.
 * @property {boolean} [wide] - Optional. If true, the card will be wider.
 */

/**
 * Array of card configurations.
 * @type {CardConfig[]}
 */
export const cardData = [
  {
    title: 'Roast',
    icon: PiFire,
    contentKey: 'roast',
    colorClass: 'text-red-500',
    color: 'red',
    bg: 'bg-red-500',
    wide: true, // This card will be displayed wider than others
  },
  {
    title: 'Strengths',
    icon: PiFlame,
    contentKey: 'strengths',
    colorClass: 'text-orange-500',
    color: 'orange',
    bg: 'bg-orange-500',
  },
  {
    title: 'Weaknesses',
    icon: PiMoon,
    contentKey: 'weaknesses',
    colorClass: 'text-blue-500',
    color: 'blue',
    bg: 'bg-blue-500',
  },
  {
    title: 'Love Life',
    icon: PiHeart,
    contentKey: 'loveLife',
    colorClass: 'text-red-500',
    color: 'red',
    bg: 'bg-red-500',
  },
  {
    title: 'Money',
    icon: PiMoney,
    contentKey: 'money',
    colorClass: 'text-green-500',
    color: 'green',
    bg: 'bg-green-500',
  },
  {
    title: 'Health',
    icon: PiBarbell,
    contentKey: 'health',
    colorClass: 'text-indigo-500',
    color: 'indigo',
    bg: 'bg-indigo-500',
  },
  {
    title: "Other's Perspective",
    icon: PiUsers,
    contentKey: 'colleaguePerspective',
    colorClass: 'text-yellow-500',
    color: 'yellow',
    bg: 'bg-yellow-500',
  },
  {
    title: 'Biggest Goal',
    icon: PiRocket,
    contentKey: 'biggestGoal',
    colorClass: 'text-purple-500',
    color: 'purple',
    bg: 'bg-purple-500',
  },
  {
    title: 'Famous Person like You',
    icon: PiStar,
    contentKey: 'famousPersonComparison',
    colorClass: 'text-emerald-500',
    color: 'emerald',
    bg: 'bg-emerald-500',
  },
  {
    title: 'Pickup Lines',
    icon: PiChatTeardrop,
    contentKey: 'pickupLines',
    colorClass: 'text-pink-500',
    color: 'pink',
    bg: 'bg-pink-500',
  },
  {
    title: 'Previous Life',
    icon: PiHandsPraying,
    contentKey: 'previousLife',
    colorClass: 'text-gray-500',
    color: 'gray',
    bg: 'bg-gray-500',
  },
  {
    title: 'Animal',
    icon: PiPawPrint,
    contentKey: 'animal',
    colorClass: 'text-sky-500',
    color: 'sky',
    bg: 'bg-sky-500',
  },
  {
    title: 'Thing to Buy',
    icon: PiWallet,
    contentKey: 'fiftyDollarThing',
    colorClass: 'text-fuchsia-500',
    color: 'fuchsia',
    bg: 'bg-fuchsia-500',
  },
  {
    title: 'Career',
    icon: PiLightbulb,
    contentKey: 'career',
    colorClass: 'text-amber-500',
    color: 'amber',
    bg: 'bg-amber-500',
  },
  {
    title: 'Life Suggestion',
    icon: PiPlant,
    contentKey: 'lifeSuggestion',
    colorClass: 'text-teal-500',
    color: 'teal',
    bg: 'bg-teal-500',
  },
]

// Note: This configuration is used to generate cards in the UI.
// Each card represents a different aspect or category of information.
// The 'icon', 'colorClass', and 'bg' properties are used for styling.
// The 'contentKey' is used to fetch the appropriate content for each card.

export const compatibilityConfig = [
  {
    title: 'Personality Type Match',
    icon: PiPuzzlePiece,
    contentKey: 'personality_type_match',
    colorClass: 'text-purple-500',
    color: 'purple',
    bg: 'bg-purple-500',
  },
  {
    title: 'MBTI',
    icon: PiChartPie,
    contentKey: 'mbti',
    colorClass: 'text-indigo-500',
    color: 'indigo',
    bg: 'bg-indigo-500',
  },
  {
    title: 'Green Flags',
    icon: PiFlag,
    contentKey: 'green_flags',
    colorClass: 'text-green-500',
    color: 'green',
    bg: 'bg-green-500',
    wide: true,
  },
  {
    title: 'Red Flags',
    icon: PiWarning,
    contentKey: 'red_flags',
    colorClass: 'text-red-500',
    color: 'red',
    bg: 'bg-red-500',
    wide: true,
  },
  {
    title: 'Drama',
    icon: PiMaskHappy,
    contentKey: 'drama',
    colorClass: 'text-pink-500',
    color: 'pink',
    bg: 'bg-pink-500',
  },
  {
    title: 'Secret Desires',
    icon: PiEye,
    contentKey: 'secret_desires',
    colorClass: 'text-violet-500',
    color: 'violet',
    bg: 'bg-violet-500',
  },
  {
    title: 'Crazy',
    icon: PiSmileyXEyes,
    contentKey: 'crazy',
    colorClass: 'text-yellow-500',
    color: 'yellow',
    bg: 'bg-yellow-500',
  },
  {
    title: 'Dealbreaker',
    icon: PiProhibit,
    contentKey: 'dealbreaker',
    colorClass: 'text-orange-500',
    color: 'orange',
    bg: 'bg-orange-500',
  },
  {
    title: '3rd Wheel',
    icon: PiUsers,
    contentKey: '3rd_wheel',
    colorClass: 'text-teal-500',
    color: 'teal',
    bg: 'bg-teal-500',
  },
  {
    title: 'Attachment Style',
    icon: PiLink,
    contentKey: 'attachment_style',
    colorClass: 'text-cyan-500',
    color: 'cyan',
    bg: 'bg-cyan-500',
  },
  {
    title: 'Emotional Compatibility',
    icon: PiHeart,
    contentKey: 'emotional_compatibility',
    colorClass: 'text-rose-500',
    color: 'rose',
    bg: 'bg-rose-500',
  },
  {
    title: 'Financial Compatibility',
    icon: PiCurrencyDollar,
    contentKey: 'financial_compatibility',
    colorClass: 'text-emerald-500',
    color: 'emerald',
    bg: 'bg-emerald-500',
  },
  {
    title: 'Values Alignment',
    icon: PiScales,
    contentKey: 'values_alignment',
    colorClass: 'text-sky-500',
    color: 'sky',
    bg: 'bg-sky-500',
  },
  {
    title: 'Jealousy Levels',
    icon: PiFire,
    contentKey: 'jealousy_levels',
    colorClass: 'text-amber-500',
    color: 'amber',
    bg: 'bg-amber-500',
  },
  {
    title: 'Love Languages',
    icon: PiTranslate,
    contentKey: 'love_languages',
    colorClass: 'text-fuchsia-500',
    color: 'fuchsia',
    bg: 'bg-fuchsia-500',
  },
  {
    title: 'Communication Style Compatibility',
    icon: PiChatCircle,
    contentKey: 'communication_style_compatibility',
    colorClass: 'text-lime-500',
    color: 'lime',
    bg: 'bg-lime-500',
  },
  {
    title: 'Risk Appetite',
    icon: PiDiceSix,
    contentKey: 'risk_appetite',
    colorClass: 'text-gray-500',
    color: 'gray',
    bg: 'bg-gray-500',
  },
  {
    title: 'Free Time',
    icon: PiClock,
    contentKey: 'free_time',
    colorClass: 'text-blue-400',
    color: 'blue',
    bg: 'bg-blue-400',
  },
  {
    title: 'Marriage',
    icon: PiHandHeart,
    contentKey: 'marriage',
    colorClass: 'text-pink-400',
    color: 'pink',
    bg: 'bg-pink-400',
  },
  {
    title: 'Divorce',
    icon: PiScissors,
    contentKey: 'divorce',
    colorClass: 'text-red-400',
    color: 'red',
    bg: 'bg-red-400',
  },
  {
    title: 'Friends Forever',
    icon: PiUsersThree,
    contentKey: 'friends_forever',
    colorClass: 'text-green-400',
    color: 'green',
    bg: 'bg-green-400',
  },
  {
    title: 'Follower Flex',
    icon: PiTrendUp,
    contentKey: 'follower_flex',
    colorClass: 'text-purple-400',
    color: 'purple',
    bg: 'bg-purple-400',
  },
  {
    title: 'Overall Compatibility',
    icon: PiPercent,
    contentKey: 'overall_compability',
    colorClass: 'text-indigo-400',
    color: 'indigo',
    bg: 'bg-indigo-400',
  },
  {
    title: 'Breakup Percentage',
    icon: PiHeartBreak,
    contentKey: 'breakup_percentage',
    colorClass: 'text-red-400',
    color: 'red',
    bg: 'bg-red-400',
  },
]
