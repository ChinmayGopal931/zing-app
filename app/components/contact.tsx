'use client'

import { useState } from 'react'
import { Alert, AlertDescription } from '@/components/ui/alert'

export  function ContactForm() {
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
    <div className="bg-sky-50 p-8 rounded-lg">
      <h2 className="text-3xl font-bold mb-4">ZING launch!</h2>
      <p className="text-gray-600 mb-6">
        Be the first to know when we launch ZING nicotine pouches :)
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-1">
            Name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Name"
            required
          />
          <p className="text-sm text-gray-500 mt-1">Your name</p>
        </div>

        <div>
          <label className="block mb-1">
            Email<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Email"
            required
          />
          <p className="text-sm text-gray-500 mt-1">
            Provide your email address to know when ZING launches. For e.g abc@xyz.com
          </p>
        </div>

        <div>
          <label className="block mb-1">Phone</label>
          <div className="flex gap-2">
            <select
              value={formData.countryCode}
              onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
              className="w-24 p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="+91">🇮🇳 +91</option>
            </select>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="flex-1 p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Phone"
            />
          </div>
          <p className="text-sm text-gray-500 mt-1">Text me when ZING launches</p>
        </div>

        <button
          type="submit"
          disabled={status.loading}
          className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-700 transition-colors disabled:opacity-50"
        >
          {status.loading ? 'Submitting...' : 'Alert me on launch 😎'}
        </button>

        {status.success && (
          <Alert className="bg-green-50 border-green-200">
            <AlertDescription className="text-green-800">
              Thanks for subscribing! We'll keep you updated about the launch.
            </AlertDescription>
          </Alert>
        )}

        {status.error && (
          <Alert className="bg-red-50 border-red-200">
            <AlertDescription className="text-red-800">
              {status.error}
            </AlertDescription>
          </Alert>
        )}
      </form>
    </div>
  )
}