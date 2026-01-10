// In-memory store for verification codes
// In production, use Redis or a database for persistence across serverless instances

interface VerificationData {
  code: string;
  expires: number;
}

class VerificationStore {
  private codes = new Map<string, VerificationData>();

  set(phone: string, code: string, expiresInMs: number = 5 * 60 * 1000) {
    this.codes.set(phone, {
      code,
      expires: Date.now() + expiresInMs,
    });
  }

  get(phone: string): VerificationData | undefined {
    return this.codes.get(phone);
  }

  delete(phone: string) {
    this.codes.delete(phone);
  }

  verify(phone: string, code: string): { success: boolean; error?: string } {
    const stored = this.codes.get(phone);

    if (!stored) {
      return { success: false, error: 'No verification code found. Please request a new code.' };
    }

    if (Date.now() > stored.expires) {
      this.codes.delete(phone);
      return { success: false, error: 'Verification code expired. Please request a new code.' };
    }

    if (stored.code !== code) {
      return { success: false, error: 'Invalid verification code' };
    }

    // Success - clean up
    this.codes.delete(phone);
    return { success: true };
  }
}

// Singleton instance
export const verificationStore = new VerificationStore();
