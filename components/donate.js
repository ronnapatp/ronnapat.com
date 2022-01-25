import Script from "next/script"

export default function () {
    return(
        <div className="">
            <Script src="https://donorbox.org/widget.js" paypalExpress="false"></Script>
            <iframe src="https://donorbox.org/embed/donate-to-ronnapat" name="donorbox" allowpaymentrequest="allowpaymentrequest" seamless="seamless" frameborder="0" scrolling="no" height="900px" width="100%"></iframe>
        </div>
    )
}