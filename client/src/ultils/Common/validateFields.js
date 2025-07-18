const validate = (payload, setInvalidField) => {
    let invalids = 0
    let fields = Object.entries(payload)
    fields.forEach(item => {
        if (item[1] === '') {
            setInvalidField(prev => [...prev, {
                name: item[0],
                message: 'Bạn không được bỏ trống trường này.'
            }])
            invalids++
        }
    })
    fields.forEach(item => {
        switch (item[0]) {
            case 'password':
                if(item[1].length < 6 ) {
                    setInvalidField(prev => [...prev, {
                        name: item[0],
                        message: 'Mật khẩu phải có ít nhất 6 kí tự.'
                    }])
                    invalids++
                }
                break;

            case 'phone':
                if(!+item[1]) {
                    setInvalidField(prev => [...prev, {
                        name: item[0],
                        message: 'Số điện thoại không hợp lệ.'
                    }])
                    invalids++
                }
                break

            case 'priceNumber':
            case 'areaNumber':
                if(+item[1] === 0) {
                    setInvalidField(prev => [...prev, {
                        name: item[0],
                        message: 'Chưa đặt giá trị cho trường này.'
                    }])
                    invalids++
                }
                if(!+item[1]) {
                    setInvalidField(prev => [...prev, {
                        name: item[0],
                        message: 'Trường này phải là số.'
                    }])
                    invalids++
                }
            break
        
            default:
                break;
        }
    })
    return invalids
}

export default validate