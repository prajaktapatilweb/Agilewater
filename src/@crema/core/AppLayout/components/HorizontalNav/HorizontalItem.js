import React, { useState } from 'react';
import { Icon, ListItem, ListItemText } from '@mui/material';
import { useRouter, withRouter } from 'next/router';
import clsx from 'clsx';
import Link from 'next/link';
import PropTypes from 'prop-types';
import IntlMessages from '../../../../utility/IntlMessages';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import { useSidebarContext } from '../../../../utility/AppContextProvider/SidebarContextProvider';
import PropsTypes from 'prop-types';

function HorizontalItem(props) {
  const { item, dense } = props;
  const { pathname } = useRouter();
  const active = isUrlInChildren(item, pathname);
  const { sidebarMenuSelectedBgColor, sidebarMenuSelectedTextColor } =
    useSidebarContext();

  function isUrlInChildren(parent, url) {
    if (!parent.children) {
      return false;
    }

    for (let i = 0; i < parent.children.length; i++) {
      if (parent.children[i].children) {
        if (isUrlInChildren(parent.children[i], url)) {
          return true;
        }
      }

      if (
        parent.children[i].url === url ||
        url.includes(parent.children[i].url)
      ) {
        return true;
      }
    }

    return false;
  }

  const [isHovered, setHovered] = useState(false);
  const calculatedStyle = { ...(isHovered ? { backgroundColor: 'rgba(0,0,0,.08)' } : {}) };
  return (
    <Link href={item.url} as={item.as} >
      <a style={{ textDecoration: 'none', }} >
        <ListItem
          className={clsx('navItemSubmenu', dense && 'dense', {
            active: item.url === props.router.pathname,
          })}
          exact={item.exact}
          style={calculatedStyle}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          sx={{
            minHeight: 40,
            padding: '4px 12px',
            color: (theme) => theme.palette.text.primary,
            textDecoration: 'none!important',
            // Below line is commented to remove the space between two menu items on navbar
            // minWidth: 160,
            '&.active': {
              backgroundColor: sidebarMenuSelectedBgColor,
              // color: sidebarMenuSelectedTextColor + '!important',
              color: 'red' + '!important',
              pointerEvents: 'none',
              '& .list-item-text-primary': {
                color: 'inherit',
              },
              '& .list-item-icon': {
                color: 'inherit',
              },
            },
            '& .list-item-text': {
              padding: '0 0 0 16px',
            },
            '&.dense': {
              padding: '4px 12px',
              minHeight: 40,
              '& .list-item-text': {
                padding: '0 0 0 8px',
              },
            },
          }}
        >
          {item.icon && (
            <Icon
              sx={{
                color: active ? sidebarMenuSelectedTextColor : 'action',
                mr: 3,
                fontSize: { xs: 16, xl: 18 },
              }}
            >
              {item.icon}
            </Icon>
          )}
          <ListItemText
            className='AppNavLinkTextSubmenu'
            primary={<IntlMessages id={item.messageId} />}
          />
          {item.count && (
            <Box ml={4} clone>
              <Badge
                count={item.count}
                sx={{
                  color: item.color,
                }}
              />
            </Box>
          )}
        </ListItem>
      </a>
    </Link>
  );
}

HorizontalItem.defaultProps = {};

export default withRouter(React.memo(HorizontalItem));

HorizontalItem.propTypes = {
  item: PropTypes.object,
  dense: PropTypes.bool,
  router: PropsTypes.object,
};
