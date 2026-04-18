import { ListTodo, Phone, ArrowRightLeft, Building2, Flame, Bell } from 'lucide-react'

const widgetColumns = [
  [
    {
      title: "Today's Tasks",
      icon: ListTodo,
      accent: '#3B82F6',
      items: [
        { text: 'Follow up with Sarah Chen', time: '9:00 AM', done: false, tag: 'Call' },
        { text: 'Send CMA to Thompson family', time: '10:30 AM', done: true, tag: 'Email' },
        { text: 'Prepare listing photos for 42 Oak', time: '1:00 PM', done: false, tag: 'Listing' },
        { text: 'Schedule showing — 18 Maple Dr', time: '3:00 PM', done: false, tag: 'Showing' },
      ],
    },
    {
      title: 'Need Keep In Touch',
      icon: Phone,
      accent: '#8B5CF6',
      items: [
        { name: 'David Park', days: 14, score: 62, avatar: 'DP' },
        { name: 'Maria Santos', days: 21, score: 55, avatar: 'MS' },
        { name: 'Tom & Lisa R.', days: 30, score: 48, avatar: 'TL' },
      ],
    },
  ],
  [
    {
      title: 'Transactions',
      icon: ArrowRightLeft,
      accent: '#10B981',
      items: [
        { address: '742 Evergreen Terrace', stage: 'Under Contract', price: '$485,000', progress: 75 },
        { address: '18 Maple Drive', stage: 'Pending', price: '$320,000', progress: 50 },
        { address: '91 Sunset Blvd', stage: 'Closing', price: '$1,200,000', progress: 90 },
      ],
    },
    {
      title: 'My Listings',
      icon: Building2,
      accent: '#F59E0B',
      items: [
        { address: '42 Oak Street', status: 'Active', price: '$550,000', views: 124 },
        { address: '15 River Road', status: 'Coming Soon', price: '$720,000', views: 0 },
        { address: '8 Pine Court', status: 'Active', price: '$389,000', views: 87 },
      ],
    },
  ],
  [
    {
      title: 'Hot Sheets',
      icon: Flame,
      accent: '#EF4444',
      items: [
        { label: 'New listings in Scottsdale', count: 12, trend: '+3' },
        { label: 'Price reductions — Tempe', count: 5, trend: '+1' },
        { label: 'Sold last 7 days — Mesa', count: 18, trend: '-2' },
      ],
    },
    {
      title: 'New Updates',
      icon: Bell,
      accent: '#06B6D4',
      items: [
        { text: 'Kristin Watson opened your email', time: '2m ago', type: 'email' },
        { text: 'New lead from Zillow — Jake Miller', time: '15m ago', type: 'lead' },
        { text: 'Offer accepted on 742 Evergreen', time: '1h ago', type: 'transaction' },
      ],
    },
  ],
]

export default widgetColumns