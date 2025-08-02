import { CartItem } from '../contexts/CartContext';

interface InvoiceData {
  orderId: string;
  date: string;
  items: CartItem[];
  subtotal: number;
  shipping: number;
  total: number;
  customerName: string;
  customerEmail: string;
  shippingAddress: string;
}

export const generateInvoice = (data: InvoiceData): string => {
  const { orderId, date, items, subtotal, shipping, total, customerName, customerEmail, shippingAddress } = data;

  const itemsHtml = items.map(item => {
    const itemPrice = item.discount ? item.price * (1 - item.discount / 100) : item.price;
    return `
      <tr>
        <td class="border px-4 py-2">${item.name}</td>
        <td class="border px-4 py-2 text-right">${item.quantity}</td>
        <td class="border px-4 py-2 text-right">$${itemPrice.toFixed(2)}</td>
        <td class="border px-4 py-2 text-right">$${(itemPrice * item.quantity).toFixed(2)}</td>
      </tr>
    `;
  }).join('');

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>Invoice #${orderId}</title>
      <script src="https://cdn.tailwindcss.com"></script>
      <style>
        @media print {
          body { -webkit-print-color-adjust: exact; }
          .no-print { display: none !important; }
        }
      </style>
    </head>
    <body class="bg-gray-100 p-8">
      <div class="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <!-- Header -->
        <div class="flex justify-between items-center mb-8">
          <div>
            <h1 class="text-2xl font-bold text-gray-800">TAMAB CONSTRUCTION</h1>
            <p class="text-gray-600">Your Trusted Construction Materials Supplier</p>
          </div>
          <div class="text-right">
            <h2 class="text-xl font-bold text-amber-600">INVOICE</h2>
            <p class="text-gray-600">#${orderId}</p>
            <p class="text-gray-600">${date}</p>
          </div>
        </div>

        <!-- Customer Info -->
        <div class="grid grid-cols-2 gap-8 mb-8">
          <div>
            <h3 class="text-lg font-semibold mb-2">Bill To:</h3>
            <p class="font-medium">${customerName}</p>
            <p>${customerEmail}</p>
            <p>${shippingAddress}</p>
          </div>
          <div class="text-right">
            <h3 class="text-lg font-semibold mb-2">Payment Method:</h3>
            <p>Cash on Delivery</p>
            <p class="mt-2">Due: ${new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString()}</p>
          </div>
        </div>

        <!-- Items Table -->
        <div class="mb-8">
          <table class="w-full">
            <thead>
              <tr class="bg-gray-100">
                <th class="text-left px-4 py-2">Description</th>
                <th class="text-right px-4 py-2">Qty</th>
                <th class="text-right px-4 py-2">Unit Price</th>
                <th class="text-right px-4 py-2">Amount</th>
              </tr>
            </thead>
            <tbody>
              ${itemsHtml}
            </tbody>
          </table>
        </div>

        <!-- Totals -->
        <div class="ml-auto w-64">
          <div class="flex justify-between py-2 border-b">
            <span>Subtotal:</span>
            <span>$${subtotal.toFixed(2)}</span>
          </div>
          <div class="flex justify-between py-2 border-b">
            <span>Shipping:</span>
            <span>${shipping > 0 ? `$${shipping.toFixed(2)}` : 'FREE'}</span>
          </div>
          <div class="flex justify-between py-2 text-lg font-bold">
            <span>Total:</span>
            <span>$${total.toFixed(2)}</span>
          </div>
        </div>

        <!-- Footer -->
        <div class="mt-12 pt-6 border-t text-center text-gray-600 text-sm">
          <p>Thank you for your business!</p>
          <p class="mt-2">If you have any questions about this invoice, please contact our support team.</p>
          <p class="mt-4">TAMAB CONSTRUCTION • support@tamab.com • +855 23 456 789</p>
        </div>

        <!-- Print Button -->
        <div class="mt-8 text-center no-print">
          <button onclick="window.print()" class="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-6 rounded">
            Print Invoice
          </button>
        </div>
      </div>
    </body>
    </html>
  `;
};

/**
 * Returns the invoice HTML as a string that can be used for email or display
 * @param invoiceHtml The HTML string of the invoice
 * @returns The same HTML string for chaining or further processing
 */
export const getInvoiceHtml = (invoiceHtml: string): string => {
  return invoiceHtml;
};

/**
 * Opens the invoice in a new browser tab
 * @param invoiceHtml The HTML string of the invoice
 */
export const openInvoiceInNewTab = (invoiceHtml: string) => {
  const blob = new Blob([invoiceHtml], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const newWindow = window.open(url, '_blank');
  
  // Ensure the new window is not blocked by popup blockers
  if (newWindow) {
    newWindow.focus();
  } else {
    alert('Please allow popups for this website to view the invoice.');
  }
};
