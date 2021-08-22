import StoryCard from "./StoryCard"

const stories = [
    {
        name:"Elon Musk",
        src:"https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/d/9/a/d9a1058910_50163142_elon-musk1.jpg",
        profile:"https://cdn.britannica.com/45/223045-050-A6453D5D/Telsa-CEO-Elon-Musk-2014.jpg"
    },
    {
        name:"Mark Zuckerberg",
        src:"https://media.gettyimages.com/photos/founder-and-ceo-of-facebook-mark-zuckerber-gives-his-speach-during-picture-id511573652?k=6&m=511573652&s=612x612&w=0&h=5vSH1VYX6Kdg-xvs7-nI8l7yyD5i6lKHwbWWYQe6oDc=",
        profile:"https://media.gettyimages.com/photos/facebook-ceo-mark-zuckerberg-leaves-the-elysee-palace-after-a-meeting-picture-id1148265348?k=6&m=1148265348&s=612x612&w=0&h=NcofMSjKUil2_CBiDcQ1WfaxwcFJE_OoKMOH7s17y8Y="
    },
    {
        name:"Bill Gates",
        src:"https://media.gettyimages.com/photos/bill-gates-cochair-bill-melinda-gates-foundation-speaks-onstage-at-picture-id1185999102?k=6&m=1185999102&s=612x612&w=0&h=4hfFkFTDQxVUd5gpMrU8ZQZ0Yak4RP0XIMeNZr66SwI=",
        profile:"https://media.gettyimages.com/photos/bill-gates-the-cofounder-of-the-microsoft-company-and-cofounder-of-picture-id543265518?k=6&m=543265518&s=612x612&w=0&h=WrHaZ2ON0hR7P2tptoi7jrErx9xpbS7qV4pK1wXLPng="
    },
    {
        name:"Jeff Bezos",
        src:"https://media.gettyimages.com/photos/amazon-ceo-jeff-bezos-announces-the-cofounding-of-the-climate-pledge-picture-id1175723926?k=6&m=1175723926&s=612x612&w=0&h=BXV05tgWqlqPU-uNfGFZYUSj1KFogY-J6_mLx_xY-2w=",
        profile:"https://media.gettyimages.com/photos/amazoncom-founder-and-ceo-jeff-bezos-presents-the-companys-first-the-picture-id450831356?k=6&m=450831356&s=612x612&w=0&h=UrZd2KiATUVsBOV9r6I_1gfw-hKTLDjDMgvGBJMUJnE="
    },
    {
        name:"Carlos Ghosn",
        src:"https://media.gettyimages.com/photos/french-renault-group-ceo-and-chairman-of-japans-nissan-motor-co-ltd-picture-id1036342078?s=612x612",
        profile:"https://media.gettyimages.com/photos/renault-ceo-carlos-ghosn-looks-on-during-the-83rd-geneva-motor-show-picture-id163137572?k=6&m=163137572&s=612x612&w=0&h=_up-DneDGllE7EKxAkzZkuIEvkV3hQWTKzIXu_f_oak="
    }
]
function Stories() {
    return (
        <div className="flex justify-center space-x-3 mx-auto">
            {stories.map(story => (
                <StoryCard key={story.src} name={story.name} src={story.src} profile={story.profile} />
            ))}
        </div>
    )
}

export default Stories
