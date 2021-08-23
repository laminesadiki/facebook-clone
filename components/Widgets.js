import { SearchIcon } from "@heroicons/react/outline";
import { DotsHorizontalIcon, VideoCameraIcon } from "@heroicons/react/solid";
import Contact from "./Contact";

const contacts = [
  {
    name: "Elon Musk",
    src: "https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/d/9/a/d9a1058910_50163142_elon-musk1.jpg",
  },
  {
    name: "Mark Zuckerberg",
    src: "https://media.gettyimages.com/photos/founder-and-ceo-of-facebook-mark-zuckerber-gives-his-speach-during-picture-id511573652?k=6&m=511573652&s=612x612&w=0&h=5vSH1VYX6Kdg-xvs7-nI8l7yyD5i6lKHwbWWYQe6oDc=",
  },
  {
    name: "Bill Gates",
    src: "https://media.gettyimages.com/photos/bill-gates-cochair-bill-melinda-gates-foundation-speaks-onstage-at-picture-id1185999102?k=6&m=1185999102&s=612x612&w=0&h=4hfFkFTDQxVUd5gpMrU8ZQZ0Yak4RP0XIMeNZr66SwI=",
  },
  {
    name: "Jeff Bezos",
    src: "https://media.gettyimages.com/photos/amazon-ceo-jeff-bezos-announces-the-cofounding-of-the-climate-pledge-picture-id1175723926?k=6&m=1175723926&s=612x612&w=0&h=BXV05tgWqlqPU-uNfGFZYUSj1KFogY-J6_mLx_xY-2w=",
  },
  {
    name: "Carlos Ghosn",
    src: "https://media.gettyimages.com/photos/french-renault-group-ceo-and-chairman-of-japans-nissan-motor-co-ltd-picture-id1036342078?s=612x612",
  },
];

function Widgets() {
  return (
    <div className="hidden lg:flex flex-col w-60 p-2 mt-5">
      <div className="flex justify-between items-center text-gray-500 mb-5">
        <h2 className="text-xl">Contacts</h2>
        <div className="flex space-x-2">
          <VideoCameraIcon className="h-6" />
          <DotsHorizontalIcon className="h-6" />
        </div>
      </div>

      {contacts.map((contact) => (
        <Contact key={contact.src} src={contact.src} name={contact.name} />
      ))}
    </div>
  );
}

export default Widgets;
