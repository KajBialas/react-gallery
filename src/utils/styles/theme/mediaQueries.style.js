import { css } from 'styled-components';

export default {
    small: (...args) => css`
            @media (max-width: 767px) {
                ${css(...args)};
            }
        `,
    medium: (...args) => css`
            @media (max-width: 1199px) {
                ${css(...args)};
            }
        `,
    large: (...args) => css`
            @media (min-width: 1200px) {
                ${css(...args)};
            }
        `,
};