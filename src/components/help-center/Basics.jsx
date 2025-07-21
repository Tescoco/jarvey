import Input from '../Input'
import Dropdown from '../Dropdown';

export default function Basics() {
  const langList = [
    { name: 'English', code: 'en' },
    { name: 'Mandarin Chinese', code: 'zh' },
    { name: 'Spanish', code: 'es' },
    { name: 'Hindi', code: 'hi' },
    { name: 'Arabic', code: 'ar' },
    { name: 'Portuguese', code: 'pt' },
    { name: 'Russian', code: 'ru' },
    { name: 'Japanese', code: 'ja' },
    { name: 'Punjabi', code: 'pa' },
    { name: 'German', code: 'de' },
    { name: 'Javanese', code: 'jv' },
    { name: 'Korean', code: 'ko' },
    { name: 'French', code: 'fr' },
    { name: 'Turkish', code: 'tr' },
    { name: 'Vietnamese', code: 'vi' },
    { name: 'Telugu', code: 'te' },
    { name: 'Marathi', code: 'mr' },
    { name: 'Tamil', code: 'ta' },
    { name: 'Urdu', code: 'ur' },
    { name: 'Italian', code: 'it' },
    { name: 'Thai', code: 'th' },
    { name: 'Gujarati', code: 'gu' },
    { name: 'Polish', code: 'pl' },
    { name: 'Ukrainian', code: 'uk' },
    { name: 'Malay/Indonesian', code: 'ms' },
    { name: 'Kannada', code: 'kn' },
    { name: 'Persian (Farsi)', code: 'fa' },
    { name: 'Odia (Oriya)', code: 'or' },
    { name: 'Maithili', code: 'mai' },
    { name: 'Haitian Creole', code: 'ht' },
    { name: 'Hmong', code: 'hmn' },
    { name: 'Romanian', code: 'ro' },
    { name: 'Burmese', code: 'my' },
    { name: 'Cebuano', code: 'ceb' },
    { name: 'Somali', code: 'so' },
    { name: 'Nepali', code: 'ne' },
    { name: 'Kurdish', code: 'ku' },
    { name: 'Pashto', code: 'ps' },
    { name: 'Serbian', code: 'sr' },
    { name: 'Sinhalese', code: 'si' },
    { name: 'Khmer', code: 'km' },
    { name: 'Bhojpuri', code: 'bho' },
    { name: 'Malayalam', code: 'ml' },
    { name: 'Sunda', code: 'su' },
    { name: 'Tagalog', code: 'tl' },
    { name: 'Azerbaijani', code: 'az' },
    { name: 'Belarusian', code: 'be' },
    { name: 'Greek', code: 'el' },
    { name: 'Chichewa', code: 'ny' },
    { name: 'Chewa', code: 'ny' },
    { name: 'Chittagonian', code: 'ctg' },
    { name: 'Catalan', code: 'ca' },
    { name: 'Dutch', code: 'nl' },
    { name: 'Swahili', code: 'sw' },
    { name: 'Burmese', code: 'my' },
    { name: 'Tigrinya', code: 'ti' },
    { name: 'Xhosa', code: 'xh' },
    { name: 'Yoruba', code: 'yo' },
    { name: 'Zulu', code: 'zu' },
    { name: 'Igbo', code: 'ig' },
    { name: 'Hebrew', code: 'he' },
    { name: 'Swedish', code: 'sv' },
    { name: 'Norwegian', code: 'no' },
    { name: 'Finnish', code: 'fi' },
    { name: 'Danish', code: 'da' },
    { name: 'Hungarian', code: 'hu' },
    { name: 'Finnish', code: 'fi' },
    { name: 'Bengali', code: 'bn' },
    { name: 'Tamil', code: 'ta' }
  ];
  const contact = [
    { name: 'contact-1' },
    { name: 'contact-2' },
    { name: 'contact-3' },
    { name: 'contact-4' },
    { name: 'contact-5' },
]
  return (
    <div>
      <h2 className='text-lg text-[#0A0D14] font-inter font-semibold !leading-normal mb-[15px]'>Set up the basics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 relative z-[2]">
        <Input className='mb-0' type="text" placeholder="Type here" label="Brand Name" required={true} />
        <Dropdown className='mb-0' label="Default Language" placeholder="Type here" items={langList} search={true} required={true} />
      </div>
      <div className="mb-4 relative z-[1]">
        <Input className='mb-0' type="text" placeholder="Type here" label="Subdomain" rightIcon={'.jarvey.help'} rightIconClass="text-[#111] font-inter font-normal text-sm" required={true}/>
      </div>
      <div className="">
        <label htmlFor="" className='flex items-center gap-1 mb-1 font-inter font-semibold text-sm !leading-normal text-heading'>Connect a Store <span className="text-[#FE4234]">*</span></label>
        <p className='mb-2'>Connect a Store to use Automate features and to enable auto-embedding to your website.</p>
        <Dropdown className='mb-0' placeholder="Connect" items={contact} required={true} />
      </div>
    </div>
  )
}
