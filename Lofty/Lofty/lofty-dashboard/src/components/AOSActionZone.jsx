import { useState } from 'react'
import {
  Brain,
  Sparkles,
  AlertCircle,
  Eye,
  TrendingUp,
  MessageSquare,
  Send,
  Pencil,
  X,
  CheckCircle2,
} from 'lucide-react'

export default function AOSActionZone() {
  const [aiExpanded, setAiExpanded] = useState(false)
  const [sendFeedback, setSendFeedback] = useState(null)

  const handleSend = () => {
    setSendFeedback('sent')
    setTimeout(() => {
      setAiExpanded(false)
      setSendFeedback(null)
    }, 1200)
  }

  const handleDismiss = () => {
    setAiExpanded(false)
    setSendFeedback(null)
  }

  return (
    <div className="mt-6 mb-6">
      <div
        className="rounded-2xl overflow-hidden transition-all duration-400"
        style={{
          background: aiExpanded
            ? 'linear-gradient(135deg, #EFF6FF 0%, #F0FDFA 50%, #EFF6FF 100%)'
            : 'white',
          border: aiExpanded ? '1px solid #BAE6FD' : '1px solid #E5E7EB',
          boxShadow: aiExpanded
            ? '0 4px 24px rgba(59,130,246,0.12), 0 1px 4px rgba(59,130,246,0.06)'
            : '0 1px 3px rgba(0,0,0,0.04)',
          transition: 'all 0.4s cubic-bezier(0.22,1,0.36,1)',
        }}
      >
        {/* Banner row */}
        <div className="flex items-center justify-between px-5 py-4">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-400"
              style={{
                background: aiExpanded
                  ? 'linear-gradient(135deg, #3B82F6, #06B6D4)'
                  : 'linear-gradient(135deg, #E0E7FF, #DBEAFE)',
                boxShadow: aiExpanded ? '0 2px 10px rgba(59,130,246,0.3)' : 'none',
              }}
            >
              <Brain size={20} color={aiExpanded ? 'white' : '#3B82F6'} strokeWidth={2} />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-800">Good Morning, James</p>
              <p className="text-xs text-gray-500">
                AOS is monitoring your pipeline — {aiExpanded ? '1 action requires attention' : 'all clear for now'}
              </p>
            </div>
          </div>

          {!aiExpanded && (
            <button
              onClick={() => setAiExpanded(true)}
              className="trigger-pulse flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold border-none cursor-pointer transition-transform hover:scale-[1.03]"
              style={{
                background: 'linear-gradient(135deg, #3B82F6, #2563EB)',
                color: 'white',
                boxShadow: '0 2px 8px rgba(59,130,246,0.35)',
              }}
            >
              <Sparkles size={15} />
              Simulate AI Trigger
            </button>
          )}
        </div>

        {/* Expanded AI action card */}
        {aiExpanded && (
          <div className="ai-card-enter px-5 pb-5">
            <div
              className="rounded-xl p-5"
              style={{
                background: 'white',
                border: '1px solid #BAE6FD',
                boxShadow: '0 2px 12px rgba(59,130,246,0.08)',
              }}
            >
              {/* Alert header */}
              <div className="flex items-start gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    background: 'linear-gradient(135deg, #FEF3C7, #FDE68A)',
                    border: '1px solid #FCD34D',
                  }}
                >
                  <AlertCircle size={20} color="#D97706" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className="text-xs font-bold px-2 py-0.5 rounded-md"
                      style={{ background: '#FEF3C7', color: '#B45309', border: '1px solid #FCD34D' }}
                    >
                      HIGH INTEREST ALERT
                    </span>
                    <span className="text-xs text-gray-400">Just now</span>
                  </div>
                  <p className="text-sm leading-relaxed text-gray-600">
                    <strong className="text-gray-800">Kristin Watson</strong> just viewed{' '}
                    <strong>42 Oak Street</strong> property listing{' '}
                    <span
                      className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md text-xs font-bold"
                      style={{ background: '#FEF2F2', color: '#DC2626', border: '1px solid #FECACA' }}
                    >
                      <Eye size={11} /> 3 times
                    </span>{' '}
                    in the last hour. Her lead score is now{' '}
                    <span
                      className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md text-xs font-bold"
                      style={{ background: '#F0FDF4', color: '#16A34A', border: '1px solid #BBF7D0' }}
                    >
                      <TrendingUp size={11} /> 72
                    </span>
                    . I have drafted an SMS with an invite for a private showing this weekend.
                  </p>
                </div>
              </div>

              {/* Drafted message preview */}
              <div className="rounded-lg px-4 py-3 mb-4" style={{ background: '#F8FAFC', border: '1px solid #E2E8F0' }}>
                <p className="text-xs font-semibold text-gray-400 mb-1.5 flex items-center gap-1.5">
                  <MessageSquare size={12} /> DRAFTED SMS
                </p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  "Hi Kristin! I noticed you've been looking at 42 Oak Street — it's a fantastic property. I'd love to
                  set up a private showing for you this weekend. Would Saturday or Sunday work better? — James"
                </p>
              </div>

              {/* Action buttons */}
              <div className="flex items-center gap-2.5">
                <button
                  onClick={handleSend}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold border-none cursor-pointer transition-all"
                  style={{
                    background:
                      sendFeedback === 'sent'
                        ? 'linear-gradient(135deg, #10B981, #059669)'
                        : 'linear-gradient(135deg, #3B82F6, #2563EB)',
                    color: 'white',
                    boxShadow:
                      sendFeedback === 'sent'
                        ? '0 2px 8px rgba(16,185,129,0.35)'
                        : '0 2px 8px rgba(59,130,246,0.35)',
                  }}
                >
                  {sendFeedback === 'sent' ? (
                    <>
                      <CheckCircle2 size={15} /> Sent!
                    </>
                  ) : (
                    <>
                      <Send size={15} /> Send Now
                    </>
                  )}
                </button>
                <button
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium bg-white cursor-pointer transition-all hover:bg-gray-50"
                  style={{ color: '#475569', border: '1px solid #D1D5DB' }}
                >
                  <Pencil size={14} /> Edit Message
                </button>
                <button
                  onClick={handleDismiss}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium bg-transparent cursor-pointer transition-all hover:text-gray-600"
                  style={{ color: '#94A3B8', border: '1px solid transparent' }}
                >
                  <X size={14} /> Dismiss
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}