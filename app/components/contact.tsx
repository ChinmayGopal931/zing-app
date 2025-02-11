'use client'


import { useState } from 'react'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Smile, Loader2 } from 'lucide-react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    countryCode: '+91'
  })
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ loading: true, success: false, error: null })

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) throw new Error(data.message || 'Something went wrong')

      setStatus({
        loading: false,
        success: true,
        error: null
      })
      setFormData({
        name: '',
        email: '',
        phone: '',
        countryCode: '+91'
      })
    } catch (error) {
      setStatus({
        loading: false,
        success: false,
        error: error.message
      })
    }
  }

  return (
    <Card className="w-full max-w-xl mx-auto">
      <CardHeader className="text-center space-y-1">
        <CardTitle className="text-3xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
          Join the Waitlist
        </CardTitle>
        <p className="text-gray-500">
          Be the first to know when we launch ZING nicotine pouches
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1.5">
                Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                placeholder="Your full name"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1.5">
                Email<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1.5">Phone</label>
              <div className="flex gap-2">
                <select
                  value={formData.countryCode}
                  onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                  className="w-24 px-3 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                >
                  <option value="+91">🇮🇳 +91</option>
                </select>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="flex-1 px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="Your phone number"
                />
              </div>
              <p className="text-sm text-gray-500 mt-1.5">
                We'll text you when ZING launches
              </p>
            </div>
          </div>

          <button
            type="submit"
            disabled={status.loading}
            className="w-full bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-70"
          >
            {status.loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Joining waitlist...</span>
              </>
            ) : (
              <>
                <Smile className="w-5 h-5" />
                <span>Join the Waitlist</span>
              </>
            )}
          </button>

          {status.success && (
            <Alert className="bg-green-50 border-green-200 animate-fade-in">
              <AlertDescription className="text-green-800">
                You're on the list! We'll keep you updated about the launch.
              </AlertDescription>
            </Alert>
          )}

          {status.error && (
            <Alert className="bg-red-50 border-red-200 animate-fade-in">
              <AlertDescription className="text-red-800">
                {status.error}
              </AlertDescription>
            </Alert>
          )}
        </form>
      </CardContent>
    </Card>
  )
}