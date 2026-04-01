export const initCodeCopy = (): void => {
  const copyButtons =
    document.querySelectorAll<HTMLButtonElement>('.code-copy-btn');

  if (copyButtons.length === 0) {
    return;
  }

  const copyToClipboard = async (btn: HTMLButtonElement): Promise<void> => {
    const codeWindow = btn.closest('.code-window');
    const codeBlock = codeWindow?.querySelector<HTMLElement>(
      '.code-window-body code',
    );

    if (!codeBlock) return;

    const textToCopy = codeBlock.textContent?.trim() || '';

    try {
      await navigator.clipboard.writeText(textToCopy);

      const originalText = btn.textContent;
      btn.textContent = 'Copied!';
      btn.classList.add('is-copied');
      btn.disabled = true;

      setTimeout(() => {
        btn.textContent = originalText;
        btn.classList.remove('is-copied');
        btn.disabled = false;
      }, 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
      btn.textContent = 'Error';

      setTimeout(() => {
        btn.textContent = 'Copy';
      }, 2000);
    }
  };

  copyButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      copyToClipboard(button).then();
    });
  });
};
