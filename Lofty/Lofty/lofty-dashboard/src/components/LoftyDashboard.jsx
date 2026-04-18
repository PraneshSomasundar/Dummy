import { useState, useEffect } from 'react'
import Navbar from './Navbar'
import AOSActionZone from './AOSActionZone'
import TasksCard from './widgets/TasksCard'
import KeepInTouchCard from './widgets/KeepInTouchCard'
import TransactionsCard from './widgets/TransactionsCard'
import ListingsCard from './widgets/ListingsCard'
import HotSheetsCard from './widgets/HotSheetsCard'
import UpdatesCard from './widgets/UpdatesCard'
import widgetColumns from '../data/widgetData'

const widgetRenderers = {
  "Today's Tasks": TasksCard,
  'Need Keep In Touch': KeepInTouchCard,
  'Transactions': TransactionsCard,
  'My Listings': ListingsCard,
  'Hot Sheets': HotSheetsCard,
  'New Updates': UpdatesCard,
}

export default function LoftyDashboard() {
  const [activeNav, setActiveNav] = useState('People')
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  return (
    <div className="min-h-screen" style={{ background: '#F8F9FB' }}>
      <Navbar activeNav={activeNav} setActiveNav={setActiveNav} />

      <main className="max-w-360 mx-auto px-6 pb-12">
        <AOSActionZone />

        {/* Widget Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {widgetColumns.map((column, colIdx) => (
            <div key={colIdx} className="flex flex-col gap-5">
              {column.map((widget, widgetIdx) => {
                const Component = widgetRenderers[widget.title]
                if (!Component) return null
                return (
                  <div
                    key={widgetIdx}
                    className={mounted ? 'widget-appear' : ''}
                    style={{
                      animationDelay: `${colIdx * 100 + widgetIdx * 150}ms`,
                      animationFillMode: 'forwards',
                    }}
                  >
                    <Component widget={widget} />
                  </div>
                )
              })}
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}