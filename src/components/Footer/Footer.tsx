import React from 'react'
import { BiCopyright } from 'react-icons/bi'
import css from './Footer.module.scss'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import { HiOutlineMailOpen } from 'react-icons/hi'

export const Footer = () => {
    return (
        <div>
            <p className={css.details}>
                <img src="https://raw.githubusercontent.com/akatzav/NodeJSProject/main/src/images/webIcon.png" alt="eiffel tower" style={{height:100, width:150,}}/>
                <h3 className={css.name}>
                    <BiCopyright /> Avigail Katzav
                </h3>
                <h3 className={css.phone}>
                    <AiOutlineWhatsApp /> 054-877-1139
                </h3>
                <h3 className={css.email}>
                    <HiOutlineMailOpen /> AvigailKatzav@gmail.com
                </h3>
            </p>
        </div>
    )
}
