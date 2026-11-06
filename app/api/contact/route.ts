import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { name, email, organization, inquiryType, message } = data;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    const recipient = 'romanmekonnen067@gmail.com';
    const subject = `[Legal Inquiry] ${inquiryType || 'General'} - ${name}${organization ? ` (${organization})` : ''}`;
    const formattedBody = `Dear Roman Mekonnen,\n\nI am contacting you regarding a legal professional engagement:\n\nNature of Engagement: ${inquiryType}\nSender Name: ${name}\nEmail Address: ${email}\nOrganization: ${organization || 'Individual / Private'}\n\nMessage Details:\n${message}\n\n---\nDispatched from Roman Mekonnen Legal Portfolio (${new Date().toISOString()})`;

    // Server-side log for auditing inquiries
    console.log(`[INQUIRY FOR ROMAN MEKONNEN <${recipient}>]`, {
      from: `${name} <${email}>`,
      organization,
      inquiryType,
      subject,
      timestamp: new Date().toISOString(),
    });

    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(formattedBody);

    const mailtoUrl = `mailto:${recipient}?subject=${encodedSubject}&body=${encodedBody}`;
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${encodedSubject}&body=${encodedBody}`;

    return NextResponse.json({
      success: true,
      recipient,
      subject,
      mailtoUrl,
      gmailUrl,
      message: 'Inquiry processed successfully for Roman Mekonnen.',
    });
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { error: 'Failed to process inquiry.' },
      { status: 500 }
    );
  }
}
