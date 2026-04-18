import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'
import { TagBadge, WidgetShell } from '../shared'

export default function TasksCard({ widget }) {
  const [checks, setChecks] = useState(widget.items.map((i) => i.done))

  return (
    <WidgetShell widget={widget}>
      <div className="flex flex-col gap-1">
        {widget.items.map((item, i) => (
          <div
            key={i}
            onClick={() => {
              const next = [...checks]
              next[i] = !next[i]
              setChecks(next)
            }}
            className="flex items-center gap-3 py-2.5 px-3 rounded-xl cursor-pointer group transition-colors"
            style={{ background: checks[i] ? '#F0FDF4' : 'transparent' }}
          >
            <div
              className="w-5 h-5 rounded-md border-2 flex items-center justify-center shrink-0 transition-all"
              style={{
                borderColor: checks[i] ? '#10B981' : '#D1D5DB',
                background: checks[i] ? '#10B981' : 'transparent',
              }}
            >
              {checks[i] && <CheckCircle2 size={12} color="white" />}
            </div>
            <div className="flex-1 min-w-0">
              <p
                className="text-sm leading-tight"
                style={{
                  color: checks[i] ? '#9CA3AF' : '#1F2937',
                  textDecoration: checks[i] ? 'line-through' : 'none',
                }}
              >
                {item.text}
              </p>
              <p className="text-xs mt-0.5 text-gray-400">{item.time}</p>
            </div>
            <TagBadge color={widget.accent}>{item.tag}</TagBadge>
          </div>
        ))}
      </div>
    </WidgetShell>
  )
}