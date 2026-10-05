export type SubmitResult = { ok: true } | { ok: false; reason: 'not-configured' | 'failed' };

export type FormType = 'fanclub' | 'newsletter' | 'donation';

/**
 * Sends a sign-up to the website's own /api/submit function, which emails the visitor a designed
 * welcome message and notifies the team with the visitor's details.
 * Returns "not-configured" while the email service has not been switched on yet.
 */
export async function submitForm(type: FormType, fields: Record<string, string>): Promise<SubmitResult> {
  try {
    const res = await fetch('/api/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type, ...fields }),
    });
    if (res.ok) return { ok: true };
    if (res.status === 404 || res.status === 503) return { ok: false, reason: 'not-configured' };
    return { ok: false, reason: 'failed' };
  } catch {
    return { ok: false, reason: 'failed' };
  }
}
