enum Membership {
    Simple,
    Standard,
    Premium,
}

const membership = Membership.Standard;
const membershipReverse = Membership[2];
console.log(membership);
console.log(membershipReverse)

enum SocialMedia {
    Vk ='VK',
    FaceBook = 'FACEBOOK',
    Instagram = 'INSTAGRAM',
}

const social = SocialMedia.Instagram;
console.log(social);