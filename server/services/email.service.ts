import nodemailer from 'nodemailer';

interface PaymentEmailOptions {
  to: string;
  name: string;
  razorpay_payment_id: string;
  razorpay_order_id: string;
  amount: number;
  currency: string;
  date: string;
  emailHost: string;
  emailUser: string;
  emailPassword: string;
}

export async function sendPaymentConfirmationEmail(opts: PaymentEmailOptions) {
  const transporter = nodemailer.createTransport({
    host: opts.emailHost,
    port: 465,
    secure: true,
    auth: {
      user: opts.emailUser,
      pass: opts.emailPassword
    }
  });

  const formattedAmount = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: opts.currency || 'INR',
    minimumFractionDigits: 0
  }).format(opts.amount);

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Payment Confirmation – GCC School</title>
</head>
<body style="margin:0;padding:0;background:#f4f4f8;font-family:'Segoe UI',Arial,sans-serif;">

  <!-- Wrapper -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f8;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 8px 40px rgba(0,0,0,0.10);">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#3D1C6E 0%,#A13E99 100%);padding:40px 40px 30px;text-align:center;">
              <img src="https://storage.googleapis.com/gcc_prod_static_files_backend/static/images/gcc_school_logo.png"
                   alt="GCC School" height="60"
                   style="height:60px;display:block;margin:0 auto 20px;" />
              <h1 style="color:#ffffff;font-size:26px;font-weight:700;margin:0;letter-spacing:-0.5px;">
                Payment Confirmed ✓
              </h1>
              <p style="color:rgba(255,255,255,0.80);font-size:15px;margin:8px 0 0;">
                Your application fee has been received successfully.
              </p>
            </td>
          </tr>

          <!-- Greeting -->
          <tr>
            <td style="padding:36px 40px 0;">
              <p style="font-size:16px;color:#333;margin:0;">Dear <strong>${opts.name}</strong>,</p>
              <p style="font-size:15px;color:#555;line-height:1.7;margin:12px 0 0;">
                Thank you for applying to <strong>GCC School</strong>. We have successfully received your
                application fee payment. Your journey toward a global finance career begins here!
              </p>
            </td>
          </tr>

          <!-- Payment Details Card -->
          <tr>
            <td style="padding:28px 40px;">
              <table width="100%" cellpadding="0" cellspacing="0"
                     style="background:#faf7ff;border:1px solid #e2d9f3;border-radius:12px;overflow:hidden;">
                <tr>
                  <td style="padding:20px 24px;border-bottom:1px solid #e2d9f3;">
                    <p style="margin:0;font-size:13px;text-transform:uppercase;letter-spacing:0.8px;color:#8B6BB1;font-weight:600;">
                      Payment Details
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:0 24px;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding:14px 0;border-bottom:1px solid #ede8f8;font-size:14px;color:#666;">Payment ID</td>
                        <td style="padding:14px 0;border-bottom:1px solid #ede8f8;font-size:14px;color:#2D1B5A;font-weight:600;text-align:right;font-family:monospace;">
                          ${opts.razorpay_payment_id}
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:14px 0;border-bottom:1px solid #ede8f8;font-size:14px;color:#666;">Order ID</td>
                        <td style="padding:14px 0;border-bottom:1px solid #ede8f8;font-size:14px;color:#2D1B5A;font-weight:600;text-align:right;font-family:monospace;">
                          ${opts.razorpay_order_id}
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:14px 0;border-bottom:1px solid #ede8f8;font-size:14px;color:#666;">Date &amp; Time</td>
                        <td style="padding:14px 0;border-bottom:1px solid #ede8f8;font-size:14px;color:#2D1B5A;font-weight:600;text-align:right;">
                          ${opts.date}
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:14px 0;font-size:14px;color:#666;">Amount Paid</td>
                        <td style="padding:14px 0;font-size:18px;color:#3D1C6E;font-weight:800;text-align:right;">
                          ${formattedAmount}
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Next Steps -->
          <tr>
            <td style="padding:0 40px 28px;">
              <table width="100%" cellpadding="0" cellspacing="0"
                     style="background:#fff9ec;border:1px solid #fde68a;border-radius:12px;padding:20px 24px;">
                <tr>
                  <td>
                    <p style="margin:0 0 10px;font-size:13px;text-transform:uppercase;letter-spacing:0.8px;color:#B45309;font-weight:600;">
                      What's Next?
                    </p>
                    <ul style="margin:0;padding-left:18px;color:#555;font-size:14px;line-height:1.9;">
                      <li>Our admissions team will review your application within <strong>2–3 working days</strong>.</li>
                      <li>You will receive further communication on your registered email.</li>
                      <li>Keep this email as your payment receipt for future reference.</li>
                    </ul>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- CTA Button -->
          <tr>
            <td style="padding:0 40px 36px;text-align:center;">
              <a href="https://gccschool.in"
                 style="display:inline-block;background:linear-gradient(135deg,#3D1C6E,#A13E99);color:#fff;font-size:15px;font-weight:700;text-decoration:none;padding:14px 36px;border-radius:50px;letter-spacing:0.5px;">
                Visit GCC School →
              </a>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding:0 40px;">
              <hr style="border:none;border-top:1px solid #eee;margin:0;" />
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:24px 40px;text-align:center;">
              <p style="font-size:13px;color:#999;margin:0 0 6px;">
                GCC School – India's 1st School for Commerce Graduates
              </p>
              <p style="font-size:12px;color:#bbb;margin:0;">
                If you have any questions, contact us at
                <a href="mailto:kamalchhabra@kcglobed.com" style="color:#A13E99;">kamalchhabra@kcglobed.com</a>
              </p>
              <p style="font-size:11px;color:#ccc;margin:10px 0 0;">
                © ${new Date().getFullYear()} GCC School. All rights reserved.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>`;

  // await transporter.sendMail({
  //     from: `"GCC School" <${opts.emailUser}>`,
  //     to: opts.to,
  //     subject: `Payment Confirmed – GCC School Application Fee (${opts.razorpay_payment_id})`,
  //     html
  // });
}

export async function sendPaymentFailureEmail(opts: {
  to: string;
  name: string;
  paymentLink: string;
  emailHost: string;
  emailUser: string;
  emailPassword: string;
  emailPort?: number;
  emailSecure?: boolean;
  fromEmail?: string;
}) {
  console.log("opts", opts);
  const transporter = nodemailer.createTransport({
    host: opts.emailHost,
    port: opts.emailPort !== undefined ? opts.emailPort : 587,
    secure: opts.emailSecure !== undefined ? opts.emailSecure : false,
    auth: {
      user: opts.emailUser,
      pass: opts.emailPassword
    },
    logger: true,
    debug: true
  });

  const html = `
<div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
  <p>Dear ${opts.name || 'Candidate'},</p>
  
  <p>Greetings from GCC School!</p>
  
  <p>It is found that you could not make the NFET enrolment fee successfully. You may enroll by paying the fee at this link:</p>
  
  <p><a href="${opts.paymentLink}" style="color: #A13E99; text-decoration: underline;">${opts.paymentLink}</a></p>
  
  <p>Once your payment is successful, you will receive your student kit (free of cost) on your dashboard.</p>
  
  <p>If you need any assistance, you may reach out to our team through email &ndash; <a href="mailto:info@gccschool.com">info@gccschool.com</a> and mobile &ndash; +91 9773576111.</p>
  
  <p>Thank You!</p>
  
  <p>
    Warm regards,<br>
    <strong>Team GCC School</strong><br>
    +919773576111<br>
    <a href="https://www.gccschool.com/">https://www.gccschool.com/</a>
  </p>
</div>
  `;

  try {
    const info = await transporter.sendMail({
      from: opts.fromEmail ? `"GCC School" <${opts.fromEmail}>` : `"GCC School" <${opts.emailUser}>`,
      to: opts.to,
      subject: `Complete Your NFET Registration – Payment Pending`,
      html
    });
    console.log("[EMAIL SERVICE] sendMail info:", info);
  } catch (err: any) {
    console.error("[EMAIL SERVICE] Nodemailer error:", err);
    throw err;
  }
}
