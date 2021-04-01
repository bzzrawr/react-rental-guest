import React from 'react'
import {Link} from 'react-router-dom'
import headerImageBig from '../pages/Assets/img/Mask_Group_4@2x.png'

export default function Header({greeting,info,learnMore}) {
    return (
      <>
        <div className="key-logo">
          <div className="inside-logo">
            <svg className="Path_2" viewBox="0 0 51.326 51.326">
				      <path id="Path_2" d="M 12 0 L 39.32557678222656 0 C 45.95299530029297 0 51.32557678222656 5.372583389282227 51.32557678222656 12 L 51.32557678222656 39.32557678222656 C 51.32557678222656 45.95299530029297 45.95299530029297 51.32557678222656 39.32557678222656 51.32557678222656 L 12 51.32557678222656 C 5.372583389282227 51.32557678222656 0 45.95299530029297 0 39.32557678222656 L 0 12 C 0 5.372583389282227 5.372583389282227 0 12 0 Z">
				     </path>
			      </svg>
          </div>
          <svg className="key" viewBox="0 0 18 18">
			      <path id="key" d="M 18 6.187535762786865 C 18 9.604793548583984 15.22975921630859 12.37500095367432 11.8125 12.37500095367432 C 11.41804695129395 12.37500095367432 11.03238296508789 12.33766460418701 10.65842628479004 12.2671070098877 L 9.814254760742188 13.21681690216064 C 9.654136657714844 13.39694881439209 9.424629211425781 13.50000953674316 9.183620452880859 13.49999904632568 L 7.875000476837158 13.50000095367432 L 7.875000476837158 14.90625095367432 C 7.875000476837158 15.37224769592285 7.497246742248535 15.75000095367432 7.031250476837158 15.75000095367432 L 5.625 15.75000095367432 L 5.625 17.15625190734863 C 5.625 17.62224769592285 5.247246265411377 18 4.78125 18 L 0.8437500596046448 18 C 0.3777539134025574 18 0 17.62224769592285 0 17.15625190734863 L 0 14.41198921203613 C 0 14.1882209777832 0.08891016244888306 13.97359085083008 0.2471132874488831 13.81535243988037 L 5.935465335845947 8.12700080871582 C 5.734265804290771 7.516898632049561 5.625 6.864996433258057 5.625 6.187500476837158 C 5.625 2.770242214202881 8.395207405090332 3.514703348628245e-05 11.81246471405029 -9.216742036244341e-09 C 15.23981285095215 -3.516547076287679e-05 18 2.760152578353882 18 6.187535762786865 Z M 11.8125 4.5 C 11.8125 5.431992053985596 12.56800842285156 6.187500476837158 13.50000095367432 6.187500476837158 C 14.43199348449707 6.187500476837158 15.18750095367432 5.431992053985596 15.18750095367432 4.5 C 15.18750095367432 3.568008184432983 14.43199348449707 2.8125 13.50000095367432 2.8125 C 12.56800842285156 2.8125 11.8125 3.568007946014404 11.8125 4.5 Z">
			      </path>
		      </svg>
        </div>

        <div className="greeting">{greeting}</div>
        <div className="info">{info}</div>
        <div className="Component_1__1">
          <div id="learnMore"><Link to="/Bookings" >{learnMore}</Link></div>
        </div>

        <svg className="chevron-right" viewBox="27.494 37.657 7.282 12">
		      <path id="chevron-right" d="M 34.5837287902832 44.12359619140625 L 29.24322128295898 49.46407318115234 C 28.98565483093262 49.72163772583008 28.56807327270508 49.72163772583008 28.31053352355957 49.46407318115234 L 27.68765258789063 48.84119415283203 C 27.4305248260498 48.58406829833984 27.43003082275391 48.16733551025391 27.68655204772949 47.90960311889648 L 31.91899681091309 43.65723419189453 L 27.68655204772949 39.4048957824707 C 27.43003082275391 39.14715957641602 27.4305248260498 38.73043060302734 27.68765258789063 38.47330474853516 L 28.31053352355957 37.85042572021484 C 28.56809997558594 37.59285736083984 28.98568344116211 37.59285736083984 29.24322128295898 37.85042572021484 L 34.58370208740234 43.19090270996094 C 34.84126663208008 43.44844436645508 34.84126663208008 43.86602401733398 34.5837287902832 44.12359619140625 Z">
		      </path>
	      </svg>

        <img src={headerImageBig} id="Mask_Group_4" alt="header"/>
      </>


    )
}

Header.defaultProps={
 greeting: 'Hi there!' ,
 info:'Sign in to manage your listings and booking requests on Nomad Rental',
 learnMore: 'Learn more about our premium subscription'
}