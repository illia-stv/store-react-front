import React from 'react'
import {useTranslation} from 'react-i18next';

const CartTitleComponent = () => {
    const { t } = useTranslation();

    return (
        <h1 className='cart_title'>{t("itemsInYourCart")}</h1>
    )
}

export default CartTitleComponent
