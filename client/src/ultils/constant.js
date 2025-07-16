export const path = {
    HOME: '/*',
    HOME__PAGE: ':page',
    LOGIN: 'login',
    PHONG_TRO: 'phong-tro',
    NHA_NGUYEN_CAN: 'nha-nguyen-can',
    CAN_HO_CHUNG_CU: 'can-ho-chung-cu',
    CAN_HO_MINI: 'can-ho-mini',
    CAN_HO_DICH_VU: 'can-ho-dich-vu',
    DETAIL_POST__TITLE__POSTID: 'chi-tiet/:title/:postId',
    SEARCH: 'tim-kiem',
    SYSTEM: '/he-thong/*',
    CREATE_POST: 'tao-moi-bai-dang',
    MANAGE_POST: 'quan-ly-bai-dang',
    EDIT_ACCOUNT: 'sua-thong-tin-ca-nhan',
    CONTACT: 'lien-he',
    DETAIL: '/chi-tiet/',
    DETAIL_ALL: 'chi-tiet/*'
}

export const text = {
    HOME_TITLE: 'Kênh thông tin Phòng Trọ số 1 Việt Nam',
    HOME_DESCRIPTION: 'Kênh thông tin Phòng Trọ số 1 Việt Nam - Website đăng tin cho thuê phòng trọ, nhà nguyên căn, căn hộ, hiệu quả với 100.000+ tin đăng và 2.500.000 lượt xem mỗi tháng'
}

export const location = [
    {
        id: 'hcm',
        name: 'Phòng trọ Hồ Chí Minh',
        image: 'https://i.pinimg.com/736x/6a/65/0e/6a650e6b0ee4b8e7d8bc6314790927b6.jpg',
        provinceCode: 'CUID'
    },
    {
        id: 'hn',
        name: 'Phòng trọ Hà Nội',
        image: 'https://i.pinimg.com/736x/40/ec/50/40ec50b9d6a2b46ee8af0ecee84e74d9.jpg',
        provinceCode: 'NDOE'
    },
    {
        id: 'dn',
        name: 'Phòng trọ Đà Nẵng',
        image: 'https://i.pinimg.com/736x/47/92/a6/4792a6f49c05036d98b5a9e316f1fe82.jpg',
        provinceCode: 'NNAE'
    }
]