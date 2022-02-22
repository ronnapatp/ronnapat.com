import GooglePayButton from '@google-pay/button-react'

export default function () {
  return (
    <div className="dark:bg-slate-700 w-full h-screen flex flex-col justify-center items-center">
      <h1 className="text-center text-4xl">Donate to Ronnapat Srivoravilai</h1>
      <div className="mt-5 text-center">
        <span>On Buy me a coffee</span>
        <a href="https://ronnapat.com/d/buymeacoffee" target="_blank">
          <center>
            <img src="/buymeacoffee.png" className="w-48 items-center" />
          </center>
        </a>
      </div>
      <div className="mt-5 text-center">
        <span>On Patreon</span>
        <a href="https://ronnapat.com/d/patreon" target="_blank">
          <center>
            <img src="/Patreon.png" className="w-48 items-center" />
          </center>
        </a>
      </div>
      {/* <div>
        <div className='mt-5 text-center'>
        <span>On Google Pay</span>
        <br />
      <GooglePayButton
        environment="TEST"
        paymentRequest={{
          apiVersion: 2,
          apiVersionMinor: 0,
          allowedPaymentMethods: [
            {
              type: 'CARD',
              parameters: {
                allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                allowedCardNetworks: ['MASTERCARD', 'VISA'],
              },
              tokenizationSpecification: {
                type: 'PAYMENT_GATEWAY',
                parameters: {
                  gateway: 'allpayments',
                  gatewayMerchantId: '',
                },
              },
            },
          ],
          merchantInfo: {
            merchantId: '',
            merchantName: '',
          },
          transactionInfo: {
            totalPriceStatus: 'FINAL',
            totalPriceLabel: 'Total',
            totalPrice: '50.00',
            currencyCode: 'THB',
            countryCode: 'TH',
          },
        }}
        buttonColor="black"
        buttonType="donate"
        onLoadPaymentData={paymentRequest => {
          console.log('load payment data', paymentRequest);
        }}
        />
        </div>
      </div> */}
    </div>
  );
}
