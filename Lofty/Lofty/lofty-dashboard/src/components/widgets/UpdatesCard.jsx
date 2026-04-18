import { MessageSquare, Zap, CheckCircle2, Clock } from 'lucide-react'
import { WidgetShell } from '../shared'

const iconMap = { email: MessageSquare, lead: Zap, transaction: CheckCircle2 }
const colorMap = { email: '#3B82F6', lead: '#F59E0B', transaction: '#10B981' }

export default function UpdatesCard({ widget }) {
  return (
    <WidgetShell widget={widget}>
      <div className="flex flex-col gap-1">
        {widget.items.map((item, i) => {
          const Icon = iconMap[item.type]
          const c = colorMap[item.type]
          return (
            <div key={i} className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                style={{ background: `${c}14` }}
              >
                <Icon size={15} color={c} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-700 leading-snug">{item.text}</p>
                <p className="text-xs text-gray-400 mt-1 flex items-center gap-1">
                  <Clock size={10} /> {item.time}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </WidgetShell>
  )
}