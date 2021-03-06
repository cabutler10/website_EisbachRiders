import * as React from "react"
import { useTranslation } from "react-i18next"
import Link from "../ui/Link"
import Box from "@material-ui/core/Box"
import Popover from "@material-ui/core/Popover"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import Typography from "@material-ui/core/Typography"

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />
}

function SpecialCategory(props) {
  return (
    <Typography
      sx={{ textTransform: "capitalize", fontStyle: "italic", mb: 1 }}
      {...props}
    />
  )
}

function Category(props) {
  return <Typography sx={{ textTransform: "capitalize", mb: 1 }} {...props} />
}

function StyledListItemText(props) {
  return (
    <ListItemText
      sx={{
        borderBottom: props.selected
          ? theme => `2px solid ${theme.palette.primary.main}`
          : "2px solid transparent",
        textTransform: "uppercase",
        "& .MuiTypography-root": {
          width: "max-content",
          fontWeight: 700,
          fontSize: { md: 18, lg: 26 },
        },
      }}
      {...props}
    />
  )
}
export default function DesktopLinks({ links, products, location }) {
  const { t } = useTranslation()
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? "product-popover" : undefined

  return (
    <Box sx={{ display: { xs: "none", md: "block" } }}>
      <List
        component="nav"
        aria-label="website navigation"
        sx={{ display: "flex", alignItems: "center" }}
      >
        {links.map(elem => (
          <React.Fragment key={elem}>
            {elem === "shop" ? (
              <ListItemLink
                href="https://secondwavesurfing.com/shop"
                selected={location === elem}
              >
                <StyledListItemText primary={t(`links.${elem}`)} />
              </ListItemLink>
            ) : elem === "products" ? (
              <>
                <ListItem
                  button
                  id="desktop-products-menu"
                  aria-controls="desktop-products-menu"
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  <StyledListItemText
                    primary={t(`links.${elem}`)}
                    selected={location === elem}
                  />
                </ListItem>
                <Popover
                  id={id}
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                >
                  <Box sx={{ display: "flex", pt: 3, pb: 3, pr: 6, pl: 6 }}>
                    <Box sx={{ pr: 6, pt: 4 }}>
                      {products.slice(3).map((item, idx) => (
                        <Box sx={{ display: "flex" }} key={`link${item}`}>
                          <Link
                            to={`/products/${item}`}
                            sx={{ "&:hover": { textDecoration: "none" } }}
                          >
                            <SpecialCategory>
                              {t(`links.${item}`)}
                            </SpecialCategory>
                          </Link>
                          {idx === 1 && (
                            <Typography
                              sx={{ fontSize: 10, fontWeight: 700, pl: 1 }}
                            >
                              NEW!
                            </Typography>
                          )}
                        </Box>
                      ))}
                    </Box>
                    <div>
                      <Typography
                        sx={{
                          mb: 2,
                          fontSize: 12,
                          fontWeight: 700,
                          letterSpacing: 1,
                        }}
                      >
                        ITEMS
                      </Typography>
                      {products.slice(0, 3).map(item => (
                        <Link
                          to={`/products/${item}`}
                          key={`link${item}`}
                          sx={{ "&:hover": { textDecoration: "none" } }}
                        >
                          <Category>{t(`links.${item}`)}</Category>
                        </Link>
                      ))}
                    </div>
                  </Box>
                </Popover>
              </>
            ) : (
              <Link
                to={`/${elem}`}
                key={`link${elem}`}
                sx={{ "&:hover": { textDecoration: "none" } }}
              >
                <ListItem button>
                  <StyledListItemText
                    primary={t(`links.${elem}`)}
                    selected={location === elem}
                  />
                </ListItem>
              </Link>
            )}
          </React.Fragment>
        ))}
      </List>
    </Box>
  )
}
