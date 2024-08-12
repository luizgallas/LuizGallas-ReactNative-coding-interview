import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  employeeItem: {
    flexDirection: 'row',
    padding: 10,
    paddingVertical: 15,
    borderColor: '#000',
    borderWidth: 0.8,
    borderRadius: 8,
    marginTop: 16,
  },
  employeeAvatar: {
    height: 48,
    width: 48,
    borderWidth: 1,
    borderRadius: 100,
    marginHorizontal: 10,
  },
  employeeInfo: {
    justifyContent: 'space-around',
  },
  employeeName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});
