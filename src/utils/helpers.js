/**
 * Error helper
 */
export function authError(CONST, error) {
    return {
        type: CONST,
        payload: error,
    };
}