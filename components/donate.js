import Script from "next/script"
import Container from "./container"
export default function () {
    return(
        <div className="max-w-md mx-auto py-2 my-20 px-2 md:my-40">
            Donate To ronnapat
            <Script src="https://donorbox.org/widget.js" paypalExpress="false"></Script>
            <iframe src="https://donorbox.org/embed/donate-to-ronnapat" name="donorbox" allowpaymentrequest="allowpaymentrequest" seamless="seamless" frameborder="0" scrolling="no" height="900px" width="100%"></iframe>
        </div>
    )
}