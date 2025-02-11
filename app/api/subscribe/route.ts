import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { email, name, phone, countryCode } = await req.json()

    if (!email || !name) {
      return NextResponse.json(
        { message: 'Email and name are required' },
        { status: 400 }
      )
    }

    // Your Mailchimp datacenter and list ID
    // const DC = process.env.MAILCHIMP_DC
    // const LIST_ID = process.env.MAILCHIMP_LIST_ID
    // const API_KEY = process.env.MAILCHIMP_API_KEY

    const MAILCHIMP_API_KEY="your_api_key_here"
    const MAILCHIMP_LIST_ID="your_list_id_here"
    const MAILCHIMP_DC="usX"

    const DATACENTER = DC
    const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`

    const data = {
      email_address: email,
      status: 'subscribed',
      merge_fields: {
        FNAME: name,
        PHONE: phone ? `${countryCode}${phone}` : '',
      },
    }

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `apikey ${API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    const responseData = await response.json()

    if (response.ok) {
      return NextResponse.json(
        { message: 'Successfully subscribed!' },
        { status: 200 }
      )
    } else {
      // Handle Mailchimp errors
      if (responseData.title === 'Member Exists') {
        return NextResponse.json(
          { message: 'You are already subscribed!' },
          { status: 400 }
        )
      }
      throw new Error(responseData.detail || 'Failed to subscribe')
    }
  } catch (error) {
    return NextResponse.json(
      { message: error.message || 'Internal server error' },
      { status: 500 }
    )
  }
}